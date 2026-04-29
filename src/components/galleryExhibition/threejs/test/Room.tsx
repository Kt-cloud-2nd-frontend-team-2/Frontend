import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { PaintingType } from '../../../../../types/gallery';
import { createWalls } from '../../../../../data/galleryData';
import { Html, useTexture } from '@react-three/drei';
import { Texture } from 'three';

export default function Room({ init }: { init: PaintingType[] }) {
  const size = 15;
  const height = 15 * 0.5;

  const walls = createWalls(size, height);
  const paintingTextures = useTexture(init.map((x) => x.paintingUrl));

  return (
    <>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* walls */}
      {walls.map((wall, i) => {
        return (
          <group key={i} position={wall.pos} rotation={wall.rot}>
            <mesh>
              <boxGeometry args={wall.boxSize} />
              <meshStandardMaterial
                map={paintingTextures[i]}
                emissive="white"
                emissiveMap={paintingTextures[i]}
                emissiveIntensity={0.08}
              />
            </mesh>
            <Painting
              img={paintingTextures[i]}
              details={init[i]}
              roomSize={size}
            />
          </group>
        );
      })}
      {/*ceiling*/}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
}

function Painting({
  img,
  details,
  roomSize,
}: {
  img: Texture;
  details: PaintingType;
  roomSize: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const paintingRef = useRef<THREE.MeshStandardMaterial>(null);
  const htmlRef = useRef<HTMLDivElement>(null);
  const camera = useThree((s) => s.camera);

  const aspect = img?.width / img?.height;

  const wallHeight = roomSize * 0.2;
  const wallWidth = wallHeight * aspect;
  useFrame(() => {
    if (!meshRef.current || !paintingRef.current || !htmlRef.current) return;

    const paintingPos = new THREE.Vector3();
    meshRef.current.getWorldPosition(paintingPos);

    const distance = camera.position.distanceTo(paintingPos);

    const camToPainting = paintingPos.clone().sub(camera.position).normalize();
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);

    const dot = camDir.dot(camToPainting);

    const isVisible = dot > 0.7 && distance < roomSize * 0.6;

    if (isVisible) {
      htmlRef.current.style.transform = 'translateY(0px)';
      htmlRef.current.style.opacity = '1';
      paintingRef.current.emissiveIntensity = 1.3;
    } else {
      htmlRef.current.style.transform = 'translateY(30px)';
      htmlRef.current.style.opacity = '0';
      paintingRef.current.emissiveIntensity = 0.4;
    }
  });
  if (!details) return null;

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0.16]}>
        <boxGeometry args={[wallWidth, wallHeight, 0.5]} />
        <meshStandardMaterial
          ref={paintingRef}
          map={img}
          emissiveMap={img}
          emissive="white"
          emissiveIntensity={0.4}
        />
        <Html
          ref={htmlRef}
          transform
          position={[wallWidth, -wallHeight / 1.2, 0.8]}
          distanceFactor={1.3}
          center
          occlude
          style={{
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            willChange: 'opacity, transform',
          }}
        >
          <div className={'gap flex flex-col font-bold text-white'}>
            <h1 className={'text-[130px]'}>{details?.title}</h1>
            <h1 className={'text-[90px]'}>{details?.author}</h1>
            <p className={'text-[50px] break-keep text-gray-200'}>
              {details?.desc}
            </p>
          </div>
        </Html>
      </mesh>
    </>
  );
}

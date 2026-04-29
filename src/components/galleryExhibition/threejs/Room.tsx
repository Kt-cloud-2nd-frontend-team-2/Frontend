import { ROOMSIZE } from '@/components/galleryExhibition/threejs/Player';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import type { Painting } from './Scene';
export default function Room({
  setIsModalOpen,
  init,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<null | number>>;
  init: Painting[];
}) {
  const paintingInit = init;
  const size = ROOMSIZE;
  const half = size / 2;
  const height = size * 0.3;

  const paintingsRef = useRef<Set<THREE.Mesh>>(new Set());
  const registerPainting = (mesh: THREE.Mesh) => {
    console.log('Enjs');
    paintingsRef.current.add(mesh);
  };
  const unregisterPainting = (mesh: THREE.Mesh) => {
    paintingsRef.current.delete(mesh);
  };

  const raycaster = new THREE.Raycaster();

  useFrame(({ camera }) => {
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);

    const intersects = raycaster.intersectObjects([...paintingsRef.current]);

    if (intersects.length > 0 && intersects[0].distance < 4) {
      console.log('enjse');
      const hit = intersects[0].object;
      const id = (hit as THREE.Mesh).userData.id;
      setIsModalOpen(id);
    } else {
      setIsModalOpen(null);
    }
  });

  return (
    <>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#9E815D" />
      </mesh>
      {/* walls */}
      <group position={[0, height / 2, -half]}>
        <mesh>
          <boxGeometry args={[size, height, 0.5]} />
          <meshStandardMaterial color="#CEC8BD" />
        </mesh>

        {paintingInit.map((painting, i) => {
          const gap = size / (3 + 1);
          const x = -size / 2 + gap * (i + 1);

          return (
            <Painting
              key={i}
              register={registerPainting}
              unregister={unregisterPainting}
              paintingDetails={painting}
              x={x}
            />
          );
        })}
      </group>
      <mesh position={[0, height / 2, half]}>
        <boxGeometry args={[size, height, 0.5]} />
        <meshStandardMaterial color="#D6D0C5" />
      </mesh>

      <mesh position={[-half, height / 2, 0]}>
        <boxGeometry args={[0.5, height, size]} />
        <meshStandardMaterial color="#D6D0C5" />
      </mesh>

      <mesh position={[half, height / 2, 0]}>
        <boxGeometry args={[0.5, height, size]} />
        <meshStandardMaterial color="#DDD7CC" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#ffffff" />

        {/*<pointLight position={[10, 15, 10]} intensity={0.4} />*/}
        {/*<pointLight position={[-10, 15, -10]} intensity={0.4} />*/}
        {/**/}
      </mesh>
    </>
  );
}

function Painting({
  x,
  register,
  unregister,
  paintingDetails,
}: {
  x: number;
  register: (mesh: THREE.Mesh) => void;
  unregister: (mesh: THREE.Mesh) => void;
  paintingDetails: Painting;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const paintTexture = useTexture(paintingDetails.paintingUrl);
  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    mesh.userData.id = paintingDetails.id;
    register(mesh);
    return () => unregister(mesh);
  }, []);

  return (
    <group position={[x, 0, 0.2]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 1.5, 0.3]} />
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh position={[0, 0, 0.16]}>
        <planeGeometry args={[1.8, 1.3]} />
        <meshStandardMaterial map={paintTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

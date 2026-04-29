import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Painting from '@/components/galleryExhibition/threejs/Painting';
import { PaintingType, WAllType } from '../../../../types/gallery';
import { ROOMSIZE, WALL_HEIGHT, WALLS } from '../../../../data/galleryData';

export default function Room({
  setIsModalOpen,
  init,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<null | number>>;
  init: PaintingType[];
}) {
  const size = ROOMSIZE;
  const height = WALL_HEIGHT;
  const raycaster = new THREE.Raycaster();

  const paintingsRef = useRef<Set<THREE.Mesh>>(new Set());
  const registerPainting = (mesh: THREE.Mesh) => {
    paintingsRef.current.add(mesh);
  };
  const unregisterPainting = (mesh: THREE.Mesh) => {
    paintingsRef.current.delete(mesh);
  };

  useFrame(({ camera }) => {
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);

    const intersects = raycaster.intersectObjects([...paintingsRef.current]);

    if (intersects.length > 0 && intersects[0].distance < 4) {
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
      {WALLS.map((wall, i) => {
        return (
          <group key={i} position={wall.pos}>
            <mesh>
              <boxGeometry args={wall.boxSize} />
              <meshStandardMaterial color={wall.color} />
            </mesh>

            {i === 0 &&
              init.map((painting, i) => {
                const gap = ROOMSIZE / (3 + 1);
                const x = -ROOMSIZE / 2 + gap * (i + 1);

                return (
                  <Painting
                    key={painting.id}
                    register={registerPainting}
                    unregister={unregisterPainting}
                    paintingDetails={painting}
                    x={x}
                  />
                );
              })}
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

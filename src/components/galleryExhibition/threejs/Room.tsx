import { ROOMSIZE } from '@/components/galleryExhibition/threejs/Player';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
export default function Room({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<null | number>>;
}) {
  const size = ROOMSIZE;
  const half = size / 2;
  const height = size * 0.3;

  const paintingsRef = useRef<THREE.Mesh[]>([]);
  const registerPainting = (mesh: THREE.Mesh) => {
    paintingsRef.current.push(mesh);
  };
  const raycaster = new THREE.Raycaster();

  useFrame(({ camera }) => {
    raycaster.setFromCamera(
      { x: 0, y: 0 }, // 화면 중앙
      camera
    );

    const intersects = raycaster.intersectObjects(paintingsRef.current);

    if (intersects.length > 0 && intersects[0].distance < 4) {
      const hit = intersects[0].object;
      const id = paintingsRef.current.indexOf(hit);

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

        {Array.from({ length: 3 }, (_, i) => {
          const gap = size / (3 + 1);

          const x = -size / 2 + gap * (i + 1);

          return <Painting key={i} register={registerPainting} x={x} />;
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
}: {
  x: number;
  register: (mesh: THREE.Mesh) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      register(meshRef.current);
    }
  }, []);

  return (
    <mesh ref={meshRef} position={[x, 0, 0.2]}>
      <boxGeometry args={[2, 1.5, 0.3]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

import { Canvas } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import React, { useRef } from 'react';
import Player from '@/components/galleryExhibition/threejs/Player';
import { INIT } from '../../../../../data/galleryData';
import Room from '@/components/galleryExhibition/threejs/test/Room';
import { PointLight } from 'three';
function Light() {
  const ref = useRef<PointLight>(null!);

  // useHelper(ref, PointLightHelper);

  return <pointLight ref={ref} position={[0, 1, 0]} intensity={0.2} />;
}
export default function Scene2() {
  return (
    <>
      <Canvas shadows camera={{ fov: 75 }}>
        <Room init={INIT} />
        <Light />
        <Player />
        <PointerLockControls />
      </Canvas>
    </>
  );
}

import { Canvas } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import Room from '@/components/galleryExhibition/threejs/Room';
import Player from '@/components/galleryExhibition/threejs/Player';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      {/* 조명 */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={1} />

      <Room />
      <Player />

      {/* 마우스 시점 */}
      <PointerLockControls />
    </Canvas>
  );
}

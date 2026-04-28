import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { ROOMSIZE, SPEED } from '@/config/galleryConfig';

const ROOMSIZE = 50;
const SPEED = 5;
const HEIGHT = 3;
export default function Player() {
  const camera = useThree((s) => s.camera);
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());

  const forward = useRef(new THREE.Vector3());
  const right = useRef(new THREE.Vector3());

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  const limit = ROOMSIZE / 2 - 0.5;
  const speed = SPEED;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const key = e.code
        .replace('Key', '')
        .toLowerCase() as keyof typeof keys.current;

      if (key in keys.current) {
        keys.current[key] = true;
      }
    };

    const up = (e: KeyboardEvent) => {
      const key = e.code
        .replace('Key', '')
        .toLowerCase() as keyof typeof keys.current;

      if (key in keys.current) {
        keys.current[key] = false;
      }
    };

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  useFrame((state, delta) => {
    direction.current.set(0, 0, 0);

    if (keys.current.w) direction.current.z -= 1;
    if (keys.current.s) direction.current.z += 1;
    if (keys.current.a) direction.current.x += 1;
    if (keys.current.d) direction.current.x -= 1;

    direction.current.normalize();

    velocity.current.x = direction.current.x * speed * delta;
    velocity.current.z = direction.current.z * speed * delta;
    // console.log(velocity.current.x, velocity.current.z)
    camera.getWorldDirection(forward.current);

    right.current.crossVectors(camera.up, forward.current).normalize();

    camera.position.addScaledVector(forward.current, -velocity.current.z);
    camera.position.addScaledVector(right.current, velocity.current.x);

    // 바닥 높이 고정
    camera.position.y = HEIGHT;

    // 충돌 (벽)
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -limit, limit);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -limit, limit);
  });

  return <>{/*<pointLight position={[0,2,0]} intensity={10} />*/}</>;
}

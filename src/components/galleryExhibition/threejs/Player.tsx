import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { HEIGHT, ROOMSIZE, SPEED } from '../../../../data/galleryData';

export default function Player() {
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

    // direction.current.normalize();

    velocity.current.x = direction.current.x * speed * delta;
    velocity.current.z = direction.current.z * speed * delta;

    const camera = state.camera;

    camera.getWorldDirection(forward.current);
    forward.current.y = 0;
    if (forward.current.lengthSq() < 1e-6) {
      forward.current.set(0, 0, -1);
    } else {
      forward.current.normalize();
    }
    right.current.crossVectors(camera.up, forward.current).normalize();

    const newX =
      camera.position.x +
      right.current.x * velocity.current.x -
      forward.current.x * velocity.current.z;

    const newZ =
      camera.position.z +
      right.current.z * velocity.current.x -
      forward.current.z * velocity.current.z;

    camera.position.set(
      THREE.MathUtils.clamp(newX, -limit, limit),
      HEIGHT,
      THREE.MathUtils.clamp(newZ, -limit, limit)
    );
  });
  return <>{/*<pointLight position={[0,2,0]} intensity={10} />*/}</>;
}

import { Texture } from 'three';
import { PaintingType } from '../../../../../types/gallery';
import React from 'react';
import { Html } from '@react-three/drei';
import { checkImgSize } from '@/components/galleryExhibition/threejs/test/util/util';

export default function Painting({
  visible,
  img,
  details,
  weight: w,
  height: h,
}: {
  visible: boolean;
  img: Texture;
  details: PaintingType;
  weight: number;
  height: number;
}) {
  const [imgW, imgH] = checkImgSize(img, w, h, 0.4);

  if (!details) return null;
  return (
    <group visible={visible} position={[0, 0, 0.3]}>
      <mesh receiveShadow position={[0, 0, 0.03]}>
        <planeGeometry args={[imgW * 0.95, imgH * 0.9]} />
        <meshBasicMaterial map={img} />
      </mesh>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[imgW, imgH, 0.05]} />
        <meshStandardMaterial color={'black'} />

        <Html
          transform
          position={[0, -h / 2 + 0.8, 0.13]}
          distanceFactor={2}
          center
          occlude
          style={{
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? 'auto' : 'none',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            willChange: 'opacity, transform',
          }}
        >
          <div className={'gap flex flex-col font-bold text-white'}>
            <h1 className={'text-[45px]'}>{details?.title}</h1>
            <h1 className={'text-[25px]'}>{details?.author}</h1>
            <p className={'text-[20px] text-wrap text-gray-200'}>
              {details?.desc}
            </p>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

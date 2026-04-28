import { Canvas } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import Room from '@/components/galleryExhibition/threejs/Room';
import Player from '@/components/galleryExhibition/threejs/Player';
import { useState } from 'react';
import Image from 'next/image';

const INIT = [
  {
    title: '바다의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    title: '죽음의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    title: '바다',
    author: '최지민',
    desc: 'danjㄷㅈㅂㄷdwnqjnsa',
  },
];
export default function Scene() {
  const [isModalOpen, setIsModalOpen] = useState<null | number>(null);
  const [openedModalDetails, setOpenedModalDetails] = useState<null | number>(
    null
  );

  // console.log(isModalOpen);
  return (
    <>
      <Canvas shadows camera={{ fov: 75 }}>
        {/* 조명 */}
        <ambientLight intensity={1} />

        <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />

        <directionalLight position={[-5, 5, -5]} intensity={0.2} />

        {/*<spotLight*/}
        {/*  position={[0, 6, 4]}*/}
        {/*  intensity={2}*/}
        {/*  angle={0.35}*/}
        {/*  penumbra={0.6}*/}
        {/*  castShadow*/}
        {/*/>*/}

        <Room setIsModalOpen={setIsModalOpen} />
        <Player />

        {/* 마우스 시점 */}
        <PointerLockControls />
      </Canvas>
      {isModalOpen !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-xs">
          <div
            className={
              'h-[635px] w-[672px] overflow-hidden rounded-3xl bg-white'
            }
          >
            <div className={'relative h-[445px] w-full'}>
              <Image
                src={'/createGallery/paint.png'}
                fill
                className={'absolute object-contain'}
                alt={'error'}
              />
            </div>
            <button onClick={() => setIsModalOpen(null)}>닫기</button>
            <p>{isModalOpen}</p>
          </div>
        </div>
      )}
    </>
  );
}

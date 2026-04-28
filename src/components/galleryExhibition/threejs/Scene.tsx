import { Canvas } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import Room from '@/components/galleryExhibition/threejs/Room';
import Player from '@/components/galleryExhibition/threejs/Player';
import { useState } from 'react';
import Image from 'next/image';
import ModalWrapper from '@/components/galleryExhibition/threejs/ModalWrapper';

export type Painting = {
  id: number;
  paintingUrl: string;
  title: string;
  author: string;
  desc: string;
};
const INIT = [
  {
    id: 1,
    paintingUrl: '/gallery/painting.png',
    title: '바다의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    id: 2,
    paintingUrl: '/gallery/painting.png',
    title: '죽음의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    id: 3,
    paintingUrl: '/gallery/painting.png',
    title: '바다',
    author: '최지민',
    desc: 'test2',
  },
];

export default function Scene() {
  const [isModalOpen, setIsModalOpen] = useState<null | number>(null);
  const details = isModalOpen
    ? (INIT.find((x) => x.id === isModalOpen) ?? null)
    : null;

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

        <Room setIsModalOpen={setIsModalOpen} init={INIT} />

        <Player />

        {/* 마우스 시점 */}
        <PointerLockControls />
      </Canvas>
      <ModalWrapper height={635} width={672} isOpen={!!details}>
        <PaintingDetailsModal details={details} />
      </ModalWrapper>
    </>
  );
}
function PaintingDetailsModal({ details }: { details: Painting | null }) {
  return (
    <>
      <div className={'relative m-0 h-[445px] w-full'}>
        <Image
          src={'/gallery/painting.png'}
          fill
          className={'absolute object-cover'}
          alt={'error'}
        />
      </div>

      <div className={'flex flex-col gap-3 p-6'}>
        <p className={'text-[20px] font-bold'}>{details?.title}</p>
        <p className={'text-secondary text-[14px] opacity-50'}>
          작가: {details?.author}
        </p>
        <p className={'text-secondary text-[14px] opacity-60'}>
          {details?.desc}
        </p>
        <div className={'flex items-center justify-between'}>
          <div className={'flex gap-2'}>
            <div
              className={'bg-primary h-[30px] w-[30px] rounded-full opacity-10'}
            ></div>
            <div
              className={'bg-primary h-[30px] w-[30px] rounded-full opacity-10'}
            >
              <div
                className={'z-50 m-auto h-[16px] w-[15px] bg-black opacity-0!'}
              ></div>
            </div>
            <div
              className={'bg-primary h-[30px] w-[30px] rounded-full opacity-10'}
            ></div>
          </div>
          <p className={'text-secondary text-[12px] opacity-30'}>
            로그인 후 좋아요/저장 가능
          </p>
        </div>
      </div>
    </>
  );
}

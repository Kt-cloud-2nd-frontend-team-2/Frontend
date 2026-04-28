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
              'h-[635px] w-[672px] overflow-hidden rounded-3xl border border-white bg-white'
            }
          >
            <div className={'relative m-0 h-[445px] w-full'}>
              <Image
                src={'/createGallery/paint.png'}
                fill
                className={'absolute object-cover'}
                alt={'error'}
              />
            </div>

            <div className={'flex flex-col gap-3 p-6'}>
              <p className={'text-[20px] font-bold'}>바다의 노래</p>
              <p className={'text-secondary text-[14px] opacity-50'}>
                작가 : 최지민{' '}
              </p>
              <p className={'text-secondary text-[14px] opacity-60'}>
                제주도 여행에서 바라본 에메랄드빛 바다를 담았습니다. 파도 소리가
                들리는 것 같은 그림을 그리고 싶었어요.
              </p>
              <div className={'flex items-center justify-between'}>
                <div className={'flex gap-2'}>
                  <div
                    className={
                      'bg-primary h-[30px] w-[30px] rounded-full opacity-10'
                    }
                  ></div>
                  <div
                    className={
                      'bg-primary h-[30px] w-[30px] rounded-full opacity-10'
                    }
                  >
                    <div
                      className={
                        'z-50 m-auto h-[16px] w-[15px] bg-black opacity-0!'
                      }
                    ></div>
                  </div>
                  <div
                    className={
                      'bg-primary h-[30px] w-[30px] rounded-full opacity-10'
                    }
                  ></div>
                </div>
                <p className={'text-secondary text-[12px] opacity-30'}>
                  로그인 후 좋아요/저장 가능
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

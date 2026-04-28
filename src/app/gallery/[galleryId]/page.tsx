'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Scene from '@/components/galleryExhibition/threejs/Scene';
import { IoIosArrowBack } from 'react-icons/io';
import { VscMute } from 'react-icons/vsc';
import { AiOutlineSound } from 'react-icons/ai';

export default function GalleryExhibitionPage() {
  const { galleryId } = useParams();
  const [galleryInit, setGalleryInit] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  useEffect(() => {
    console.log(galleryId);
    const fetchInit = async () => {
      //서비스 레이어로 뺼예정
      try {
        const res = await fetch('/');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await res.json();

        setGalleryInit(result.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div className={'scr fixed inset-0 z-50'}>
      <div
        className={'absolute z-40 flex w-full items-start justify-between p-5'}
      >
        <div
          className={
            'flex items-center gap-2 rounded-2xl bg-black/50 p-3 backdrop-blur-lg'
          }
        >
          <IoIosArrowBack className={'text-lg text-white/80'} />
          <div className={'flex flex-col'}>
            <p className={'font-bold text-white/80'}>봄의 소리전</p>
            <p className={'text-sm text-white/30'}>해피아트 미술학원</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted((s) => !s);
          }}
          className={
            'flex items-center gap-2 rounded-lg bg-black/50 p-3 backdrop-blur-lg'
          }
        >
          {isMuted ? (
            <VscMute className={'text-xl text-white/80'} />
          ) : (
            <AiOutlineSound className={'text-xl text-white/80'} />
          )}
        </div>
      </div>
      <Scene />
    </div>
  );
}

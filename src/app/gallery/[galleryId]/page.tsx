'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Scene from '@/components/galleryExhibition/threejs/Scene';

export default function GalleryExhibitionPage() {
  const { galleryId } = useParams();
  const [galleryInit, setGalleryInit] = useState([]);

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
    <div className={'h-[100dvh]'}>
      <Scene />
    </div>
  );
}

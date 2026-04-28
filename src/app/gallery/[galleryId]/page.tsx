'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GalleryExhibitionPage() {
  const { galleryId } = useParams();
  const [galleryInit, setGalleryInit] = useState([]);

  useEffect(() => {
    console.log(galleryId);
    const fetchInit = async () => {
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
}

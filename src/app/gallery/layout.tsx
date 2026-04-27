import Header from '@/components/galleryCreate/layout/Header';
import Footer from '@/components/galleryCreate/layout/Footer';

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'flex flex-col w-full  min-h-screen bg-[#FAF7F2]'}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

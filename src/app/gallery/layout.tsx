import Header from '@/components/galleryCreate/layout/Header';
import Footer from '@/components/galleryCreate/layout/Footer';

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'flex min-h-screen w-full flex-col bg-[#FAF7F2]'}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

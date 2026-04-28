export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'flex min-h-screen w-full flex-col bg-[#FAF7F2]'}>
      {children}
    </div>
  );
}

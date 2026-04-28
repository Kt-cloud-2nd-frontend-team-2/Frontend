export default function ModalWrapper({
  children,
  isOpen,
  height,
  width,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  height: number;
  width: number;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-xs duration-200 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={`overflow-hidden rounded-3xl border border-white bg-white ${isOpen ? 'scale-100' : 'scale-90'} duration-200`}
      >
        {children}
      </div>
    </div>
  );
}

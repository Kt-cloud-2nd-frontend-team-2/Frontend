import Image from 'next/image';

export default function CreateGalleryFormWrapper({
  title,
  icon,
  required = false,
  className,
  children,
}: {
  title: string;
  icon: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={'flex flex-col  gap-2'}>
      <p className={'font-medium flex gap-2 w-fit'}>
        <Image
          src={icon}
          width={15}
          height={15}
          alt={'logo'}
          className={' inline m-auto'}
        />
        {title}
        {required && <span className={'text-red-500 text-[14px]'}>*</span>}
      </p>
      <div
        className={`px-4 py-5 rounded-[14px] text-[#2C28264D] text-[18px] bg-[#FAF7F2] border border-[#2C28260D] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

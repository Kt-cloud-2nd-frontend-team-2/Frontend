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
    <div className={'flex flex-col gap-2'}>
      <p className={'flex w-fit gap-2 font-medium'}>
        <Image
          src={icon}
          width={15}
          height={15}
          alt={'logo'}
          className={'m-auto inline'}
        />
        {title}
        {required && <span className={'text-[14px] text-red-500'}>*</span>}
      </p>
      <div
        className={`rounded-[14px] border border-[#2C28260D] bg-[#FAF7F2] px-4 py-5 text-[18px] text-[#2C28264D] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

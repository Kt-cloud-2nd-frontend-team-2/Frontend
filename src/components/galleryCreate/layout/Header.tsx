import Image from 'next/image';

export default function Header() {
  return (
    <div
      className={
        'flex h-16 w-full items-center justify-between border-b border-[#2C282614] bg-[#FAF7F2F2] px-[55px] shadow-sm'
      }
    >
      <div className={'flex items-center gap-6'}>
        <div className={'flex items-center gap-[8px]'}>
          <Image
            src={'/HeaderLogo.png'}
            className={'object-cover'}
            width={32}
            height={32}
            alt={'logo'}
          />
          <p className={'text-[18px] font-bold'}>스타아트</p>
        </div>
        <div className={'flex items-center'}>
          <p className={'text-[14px] text-[#2C282699]'}>전체 전시회</p>
        </div>
      </div>
      <div className={'flex items-center gap-[8px]'}>
        <Image
          src={'/userLogo.png'}
          className={'object-cover'}
          width={32}
          height={32}
          alt={'logo'}
        />
        <p className={'text-[14px] font-medium'}>김미술</p>
      </div>
    </div>
  );
}

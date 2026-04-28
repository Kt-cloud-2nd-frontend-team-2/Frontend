import Image from 'next/image';

export default function Footer() {
  return (
    <div
      className={
        'flex flex-col items-center justify-center gap-10 bg-[#2C2826] px-[55px] py-[48px]'
      }
    >
      <div
        className={'flex w-full flex-col gap-10 md:flex-row md:justify-between'}
      >
        <div className={'flex flex-col gap-3'}>
          <div className={'flex items-center gap-2'}>
            <Image
              src={'/HeaderLogo.png'}
              className={'object-cover'}
              width={32}
              height={32}
              alt={'logo'}
            />
            <p className={'text-[18px] font-bold text-white'}>스타아트</p>
          </div>
          <div className={'flex flex-col text-[14px] text-[#FFFFFF80]'}>
            <p>아이들의 창작물을 진지한 작품으로,</p>
            <p>온라인 3D 가상 전시회 플랫폼</p>
          </div>
        </div>
        <div className={'flex gap-8'}>
          <div className={'flex flex-col gap-3'}>
            <p className={'text-[14px] font-bold text-white'}>서비스</p>
            <div className={'flex flex-col gap-2 text-[14px] text-[#FFFFFF80]'}>
              <p>전체 전시회</p>
              <p>회원가입</p>
            </div>
          </div>
          <div className={'flex flex-col gap-3'}>
            <p className={'text-[14px] font-bold text-white'}>안내</p>
            <div className={'flex flex-col gap-2 text-[14px] text-[#FFFFFF80]'}>
              <p>서비스 소개</p>
              <p>이용약관</p>
              <p>문의하기</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'flex h-[41px] w-full items-end justify-center border-t border-[#FFFFFF1A]'
        }
      >
        <p className={'text-[12px] text-[#FFFFFF80]'}>
          © 2026 StarArt (스타아트). All rights reserved.
        </p>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function Footer() {
  return (
    <div
      className={
        'flex flex-col bg-[#2C2826] justify-center items-center  px-[55px] py-[48px] gap-10'
      }
    >
      <div
        className={
          ' flex flex-col gap-10 md:flex-row w-full  md:justify-between'
        }
      >
        <div className={'flex flex-col gap-3'}>
          <div className={'flex  items-center gap-2'}>
            <Image
              src={'/HeaderLogo.png'}
              className={'object-cover'}
              width={32}
              height={32}
              alt={'logo'}
            />
            <p className={'text-[18px] font-bold text-white '}>스타아트</p>
          </div>
          <div className={'flex flex-col text-[14px] text-[#FFFFFF80] '}>
            <p>아이들의 창작물을 진지한 작품으로,</p>
            <p>온라인 3D 가상 전시회 플랫폼</p>
          </div>
        </div>
        <div className={'flex gap-8'}>
          <div className={'flex flex-col gap-3'}>
            <p className={'text-white text-[14px] font-bold'}>서비스</p>
            <div className={'flex flex-col text-[14px] text-[#FFFFFF80] gap-2'}>
              <p>전체 전시회</p>
              <p>회원가입</p>
            </div>
          </div>
          <div className={'flex flex-col gap-3'}>
            <p className={'text-white text-[14px] font-bold'}>안내</p>
            <div className={'flex flex-col text-[14px] text-[#FFFFFF80] gap-2'}>
              <p>서비스 소개</p>
              <p>이용약관</p>
              <p>문의하기</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'w-full h-[41px]  border-t border-[#FFFFFF1A] flex justify-center items-end'
        }
      >
        <p className={'text-[#FFFFFF80] text-[12px] '}>
          © 2026 StarArt (스타아트). All rights reserved.
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link';
import ExhibitionList from '@/components/myPage/ExhibitionList';
import LogoutButton from '@/components/myPage/LogoutButton';
import NewExhibitionBanner from '@/components/myPage/NewExhibitionBanner';
import ProfileCard from '@/components/myPage/ProfileCard';
import QuickLinks from '@/components/myPage/QuickLinks';
import type { Profile, UserRole } from '@/types/myPage';

interface MyPageScreenProps {
  profile: Profile;
  currentRole: UserRole;
}

export default function MyPageScreen({
  profile,
  currentRole,
}: MyPageScreenProps) {
  // 계정에 따라 콘텐츠 수가 달라도 푸터바 시작 위치가 크게 달라 보이지 않도록 본문 높이 고정
  const contentMinHeight = 'min-h-[720px]';

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#2d2926]">
      {/* 상단 네비게이션과 계정 전환 탭 */}
      <header className="border-b border-[#e8e1d7] bg-[#fbf8f3]">
        <div className="mx-auto flex h-14 w-full max-w-[1080px] items-center justify-between px-5">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2b53f] text-white shadow-[0_2px_8px_rgba(242,181,63,0.3)]">
                <span className="text-[13px] font-bold">Q</span>
              </div>
              <span className="text-[14px] font-bold text-[#1f1b18]">
                스타아트
              </span>
            </div>
            <a href="#" className="text-[13px] text-[#8c867d]">
              전체 전시회
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* 리뷰 시 두 페이지를 오갈 수 있도록 계정별 페이지 링크를 고정 노출 */}
            <nav className="flex rounded-full border border-[#e7ded3] bg-white p-1 shadow-[0_2px_8px_rgba(64,48,33,0.03)]">
              <Link
                href="/myPage/teacher"
                className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  currentRole === 'teacher'
                    ? 'bg-[#f2b53f] text-white'
                    : 'text-[#8c867d]'
                }`}
              >
                선생님
              </Link>
              <Link
                href="/myPage/user"
                className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  currentRole === 'user'
                    ? 'bg-[#f2b53f] text-white'
                    : 'text-[#8c867d]'
                }`}
              >
                일반 사용자
              </Link>
            </nav>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full px-1 py-1 text-[13px] text-[#4f4a44]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2b53f] text-[13px] font-bold text-white">
                {profile.name.slice(0, 1)}
              </div>
              <span>{profile.name}</span>
              <span className="text-[#a7a098]">⌄</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-56px)] w-full max-w-[1080px] flex-col px-5 pt-7">
        <section
          className={`mx-auto w-full max-w-[720px] space-y-4 pb-16 ${contentMinHeight}`}
        >
          <ProfileCard profile={profile} />
          {/* 선생님 계정만 보이는 전시회 생성 배너 */}
          {profile.role === 'teacher' && <NewExhibitionBanner />}
          <QuickLinks />
          {/* 운영 전시회 목록도 선생님 계정 전용 섹션이다. */}
          {profile.role === 'teacher' && (
            <ExhibitionList exhibitions={profile.exhibitions} />
          )}
          <LogoutButton />
        </section>

        <footer className="mt-auto w-full bg-[#2c2622] text-[#f2ede7]">
          <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-10 px-8 py-11 md:flex-row md:justify-between">
            <div className="max-w-[280px]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2b53f] text-white">
                  <span className="text-[13px] font-bold">Q</span>
                </div>
                <span className="text-[16px] font-bold">스타아트</span>
              </div>
              <p className="text-[14px] leading-8 text-[#b8aea4]">
                아이들의 창작물을 진지한 예술 작품으로,
                <br />
                온라인 3D 가상 전시회 플랫폼
              </p>
            </div>

            <div className="flex gap-16 text-[14px]">
              <div className="space-y-4">
                <p className="font-semibold text-white">서비스</p>
                <div className="space-y-3 text-[#b8aea4]">
                  <p>전체 전시회</p>
                  <p>회원가입</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-semibold text-white">안내</p>
                <div className="space-y-3 text-[#b8aea4]">
                  <p>서비스 소개</p>
                  <p>이용약관</p>
                  <p>문의하기</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1080px] border-t border-white/10 px-8 py-6 text-center text-[12px] text-[#8f867e]">
            © 2026 StarArt (스타아트). All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}

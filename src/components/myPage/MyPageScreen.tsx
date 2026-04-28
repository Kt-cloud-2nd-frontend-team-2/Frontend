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
  const contentMinHeight = 'min-h-[720px]';

  return (
    <main className="bg-[#f8f4ee] text-[#2d2926]">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-7">
        <section
          className={`mx-auto w-full max-w-[720px] space-y-4 pb-16 ${contentMinHeight}`}
        >
          <nav className="flex w-fit rounded-full border border-[#e7ded3] bg-white p-1 shadow-[0_2px_8px_rgba(64,48,33,0.03)]">
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

          <ProfileCard profile={profile} />
          {profile.role === 'teacher' && <NewExhibitionBanner />}
          <QuickLinks />
          {profile.role === 'teacher' && (
            <ExhibitionList exhibitions={profile.exhibitions} />
          )}
          <LogoutButton />
        </section>
      </div>
    </main>
  );
}

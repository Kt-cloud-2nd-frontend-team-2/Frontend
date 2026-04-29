'use client';

import { useState } from 'react';
import ExhibitionList from '@/components/myPage/ExhibitionList';
import LogoutButton from '@/components/myPage/LogoutButton';
import NewExhibitionBanner from '@/components/myPage/NewExhibitionBanner';
import ProfileCard from '@/components/myPage/ProfileCard';
import QuickLinks from '@/components/myPage/QuickLinks';
import { teacherProfile, userProfile } from '@/components/myPage/mockData';
import type { UserRole } from '@/types/myPage';

export default function MyPageScreen() {
  const [currentRole, setCurrentRole] = useState<UserRole>('teacher');

  const profile = currentRole === 'teacher' ? teacherProfile : userProfile;

  return (
    <main className="bg-[#f8f4ee] text-[#2d2926]">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-7">
        <section className="mx-auto w-full max-w-[720px] space-y-4 pb-16">
          {/* 역할 전환 탭 */}
          <div className="flex w-fit rounded-full border border-[#e7ded3] bg-white p-1 shadow-[0_2px_8px_rgba(64,48,33,0.03)]">
            <button
              onClick={() => setCurrentRole('teacher')}
              className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                currentRole === 'teacher'
                  ? 'bg-[#f2b53f] text-white'
                  : 'text-[#8c867d] hover:text-[#2d2926]'
              }`}
            >
              선생님
            </button>
            <button
              onClick={() => setCurrentRole('user')}
              className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                currentRole === 'user'
                  ? 'bg-[#f2b53f] text-white'
                  : 'text-[#8c867d] hover:text-[#2d2926]'
              }`}
            >
              일반 사용자
            </button>
          </div>

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

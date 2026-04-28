import MyPageScreen from '@/components/myPage/MyPageScreen';
import { teacherProfile, userProfile } from '@/components/myPage/mockData';

export default function MyPage() {
  return (
    <>
      <MyPageScreen profile={teacherProfile} currentRole="teacher" />

      <MyPageScreen profile={userProfile} currentRole="user" />
    </>
  );
}

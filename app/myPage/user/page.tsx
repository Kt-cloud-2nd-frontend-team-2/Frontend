import MyPageScreen from "@/components/myPage/MyPageScreen";
import { userProfile } from "@/components/myPage/mockData";

export default function UserMyPage() {
  return <MyPageScreen profile={userProfile} currentRole="user" />;
}

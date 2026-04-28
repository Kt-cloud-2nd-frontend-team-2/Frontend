import MyPageScreen from "@/components/myPage/MyPageScreen";
import { teacherProfile } from "@/components/myPage/mockData";

export default function TeacherMyPage() {
  return <MyPageScreen profile={teacherProfile} currentRole="teacher" />;
}

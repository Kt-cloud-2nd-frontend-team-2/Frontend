export type UserRole = 'teacher' | 'user';

export type Exhibition = {
  id: string;
  title: string;
  artworkCount: number;
  status: 'active' | 'ended';
  thumbnail: 'sunset' | 'abstract' | 'pastel' | 'nature';
};

export type TeacherProfile = {
  id: string;
  name: string;
  email: string;
  academy_name: string;
  role: 'teacher';
  exhibitions: Exhibition[];
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: 'user';
};

export type Profile = TeacherProfile | UserProfile;

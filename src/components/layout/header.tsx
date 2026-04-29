import Image from 'next/image';
import Link from 'next/link';
import { UserMenu } from './userMenu';

export default function Header() {
  return (
    <header className="h-16">
      <div className="border-secondary/8 fixed top-0 z-20 h-16 w-full border-b bg-[#FAF7F2]/95 shadow-[0_2px_8px_rgba(44,40,38,0.06)] backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-3.5">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="스타아트 로고"
                width={32}
                height={32}
              />
              <span className="text-secondary text-lg font-bold">스타아트</span>
            </Link>

            <nav>
              <Link
                href="/"
                className="text-secondary/60 text-sm transition-colors hover:text-gray-900"
              >
                전체 전시회
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* 로그아웃상태
            <Link
              href="/login"
              className="text-secondary hover:bg-primary/10 inline-flex h-9 items-center px-5 py-1.5 text-sm hover:rounded-xl"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="bg-primary inline-flex h-9 items-center rounded-xl px-5 text-sm text-white transition-colors hover:bg-[#E09415]"
            >
              회원가입
            </Link> */}
            {/* //로그아웃 상태 */}
            <UserMenu name="김관람" />
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Building2,
} from 'lucide-react';

type UserType = 'general' | 'teacher';

export default function SignupPage() {
  const [userType, setUserType] = useState<UserType>('general');
  const [emailSent, setEmailSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="flex flex-1 items-center justify-center px-4 pt-28 pb-12">
      <div className="w-full max-w-lg">
        {/* Logo + Title */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="스타아트 로고" width={40} height={40} />
            <span className="text-[20px] font-bold text-secondary">스타아트</span>
          </div>
          <h1 className="mt-2 text-[28px] font-bold text-secondary">회원가입</h1>
          <p className="text-[14px] text-secondary/50">계정 유형을 선택하고 가입해보세요</p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-secondary/5 bg-white p-8 pb-9 shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]">
          {/* Tab Switcher */}
          <div className="mb-6 flex rounded-2xl bg-[#faf7f2] p-1">
            <button
              onClick={() => setUserType('general')}
              className={`h-10 flex-1 rounded-[14px] text-[14px] font-medium transition-all ${
                userType === 'general'
                  ? 'bg-white text-secondary shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                  : 'text-secondary/50'
              }`}
            >
              👤 일반 사용자
            </button>
            <button
              onClick={() => setUserType('teacher')}
              className={`h-10 flex-1 rounded-[14px] text-[14px] font-medium transition-all ${
                userType === 'teacher'
                  ? 'bg-white text-secondary shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                  : 'text-secondary/50'
              }`}
            >
              🎨 선생님
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            {/* 이름 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-secondary">이름</label>
              <div className="relative">
                <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-secondary/40">
                  <User className="h-3.75 w-3.75" />
                </div>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="h-12.5 w-full rounded-[14px] border border-secondary/5 bg-[#faf7f2] pr-4 pl-10 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-secondary">이메일</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-secondary/40">
                    <Mail className="h-3.75 w-3.75" />
                  </div>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="h-12.5 w-full rounded-[14px] border border-secondary/5 bg-[#faf7f2] pr-4 pl-10 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <button
                  onClick={() => setEmailSent(true)}
                  className="h-12.5 rounded-[14px] bg-primary/10 px-4 text-[14px] font-medium whitespace-nowrap text-primary transition-colors hover:bg-primary/20"
                >
                  {emailSent ? '재발송' : '인증발송'}
                </button>
              </div>
            </div>

            {/* 인증번호 */}
            {emailSent && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-secondary">인증번호</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="인증번호 6자리 입력"
                    className="h-12.5 flex-1 rounded-[14px] border border-secondary/5 bg-[#faf7f2] px-4 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                  />
                  <div className="flex shrink-0 items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-[#00c950]" />
                    <span className="text-[14px] text-[#00c950]">발송됨</span>
                  </div>
                </div>
              </div>
            )}

            {/* 비밀번호 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-secondary">비밀번호</label>
              <div className="relative">
                <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-secondary/40">
                  <Lock className="h-3.75 w-3.75" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="6자 이상"
                  className="h-12.5 w-full rounded-[14px] border border-secondary/5 bg-[#faf7f2] pr-12 pl-10 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-secondary/40 transition-colors hover:text-secondary/70"
                >
                  {showPassword ? (
                    <EyeOff className="h-3.75 w-3.75" />
                  ) : (
                    <Eye className="h-3.75 w-3.75" />
                  )}
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-secondary">비밀번호 확인</label>
              <div className="relative">
                <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-secondary/40">
                  <Lock className="h-3.75 w-3.75" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="비밀번호 재입력"
                  className="h-12.5 w-full rounded-[14px] border border-secondary/5 bg-[#faf7f2] pr-12 pl-10 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-3.5 -translate-y-1/2 text-secondary/40 transition-colors hover:text-secondary/70"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-3.75 w-3.75" />
                  ) : (
                    <Eye className="h-3.75 w-3.75" />
                  )}
                </button>
              </div>
            </div>

            {/* 선생님 전용 필드 */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                userType === 'teacher' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="flex flex-col gap-6">
                  {/* 교육기관명 */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-secondary">교육기관명</label>
                    <div className="relative">
                      <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-secondary/40">
                        <Building2 className="h-3.75 w-3.75" />
                      </div>
                      <input
                        type="text"
                        placeholder="학원 / 학교명"
                        className="h-12.5 w-full rounded-[14px] border border-secondary/5 bg-[#faf7f2] pr-4 pl-10 text-[16px] text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  {/* 사용 목적 */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-secondary">사용 목적</label>
                    <textarea
                      placeholder="사용 목적을 간략하게 작성해주세요"
                      rows={4}
                      className="w-full resize-none rounded-[14px] border border-secondary/5 bg-[#faf7f2] px-4 py-3 text-[16px] leading-6 text-secondary transition-all outline-none placeholder:text-secondary/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <button className="mt-2 h-13 w-full rounded-[14px] bg-primary text-[16px] font-semibold text-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all hover:bg-[#e5aa35] active:scale-[0.99]">
              회원가입 완료
            </button>

            {/* 로그인 링크 */}
            <p className="text-center text-[14px] text-secondary/50">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

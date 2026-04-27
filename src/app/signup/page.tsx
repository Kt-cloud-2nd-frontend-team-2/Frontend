'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Star,
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
    <div className="min-h-screen bg-[#faf7f2] flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(250,247,242,0.95)] border-b border-[rgba(44,40,38,0.08)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm">
        <div className="max-w-304 mx-auto px-14 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f4b942] rounded-[14px] flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[18px] font-bold text-[#2c2826]">
                스타아트
              </span>
            </Link>
            <Link
              href="/exhibitions"
              className="text-[14px] text-[rgba(44,40,38,0.6)] hover:text-[#2c2826] transition-colors"
            >
              전체 전시회
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="h-9 px-4 flex items-center text-[14px] text-[#2c2826] rounded-[14px] hover:bg-[rgba(44,40,38,0.05)] transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="h-9 px-4 flex items-center text-[14px] text-white bg-[#f4b942] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:bg-[#e5aa35] transition-colors"
            >
              회원가입
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-12">
        <div className="w-full max-w-lg">
          {/* Logo + Title */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f4b942] rounded-2xl flex items-center justify-center">
                <Star className="w-4.5 h-4.5 text-white fill-white" />
              </div>
              <span className="text-[20px] font-bold text-[#2c2826]">
                스타아트
              </span>
            </div>
            <h1 className="text-[28px] font-bold text-[#2c2826] mt-2">
              회원가입
            </h1>
            <p className="text-[14px] text-[rgba(44,40,38,0.5)]">
              계정 유형을 선택하고 가입해보세요
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl border border-[rgba(44,40,38,0.05)] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-8 pb-9">
            {/* Tab Switcher */}
            <div className="bg-[#faf7f2] rounded-2xl p-1 flex mb-6">
              <button
                onClick={() => setUserType('general')}
                className={`flex-1 h-10 rounded-[14px] text-[14px] font-medium transition-all ${
                  userType === 'general'
                    ? 'bg-white text-[#2c2826] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                    : 'text-[rgba(44,40,38,0.5)]'
                }`}
              >
                👤 일반 사용자
              </button>
              <button
                onClick={() => setUserType('teacher')}
                className={`flex-1 h-10 rounded-[14px] text-[14px] font-medium transition-all ${
                  userType === 'teacher'
                    ? 'bg-white text-[#2c2826] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                    : 'text-[rgba(44,40,38,0.5)]'
                }`}
              >
                🎨 선생님
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-6">
              {/* 이름 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#2c2826]">
                  이름
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)]">
                    <User className="w-3.75 h-3.75" />
                  </div>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className="w-full h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] pl-10 pr-4 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                  />
                </div>
              </div>

              {/* 이메일 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#2c2826]">
                  이메일
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)]">
                      <Mail className="w-3.75 h-3.75" />
                    </div>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] pl-10 pr-4 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                    />
                  </div>
                  <button
                    onClick={() => setEmailSent(true)}
                    className="h-12.5 px-4 bg-[rgba(244,185,66,0.1)] text-[#f4b942] text-[14px] font-medium rounded-[14px] whitespace-nowrap hover:bg-[rgba(244,185,66,0.2)] transition-colors"
                  >
                    {emailSent ? '재발송' : '인증발송'}
                  </button>
                </div>
              </div>

              {/* 인증번호 */}
              {emailSent && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-medium text-[#2c2826]">
                    인증번호
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="인증번호 6자리 입력"
                      className="flex-1 h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] px-4 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                    />
                    <div className="flex items-center gap-1 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00c950]" />
                      <span className="text-[14px] text-[#00c950]">발송됨</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 비밀번호 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#2c2826]">
                  비밀번호
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)]">
                    <Lock className="w-3.75 h-3.75" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="6자 이상"
                    className="w-full h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] pl-10 pr-12 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)] hover:text-[rgba(44,40,38,0.7)] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-3.75 h-3.75" />
                    ) : (
                      <Eye className="w-3.75 h-3.75" />
                    )}
                  </button>
                </div>
              </div>

              {/* 비밀번호 확인 */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#2c2826]">
                  비밀번호 확인
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)]">
                    <Lock className="w-3.75 h-3.75" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="비밀번호 재입력"
                    className="w-full h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] pl-10 pr-12 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)] hover:text-[rgba(44,40,38,0.7)] transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-3.75 h-3.75" />
                    ) : (
                      <Eye className="w-3.75 h-3.75" />
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
                <div className="overflow-hidden min-h-0">
                  <div className="flex flex-col gap-6">
                    {/* 교육기관명 */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[14px] font-medium text-[#2c2826]">
                        교육기관명
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(44,40,38,0.4)]">
                          <Building2 className="w-3.75 h-3.75" />
                        </div>
                        <input
                          type="text"
                          placeholder="학원 / 학교명"
                          className="w-full h-12.5 bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] pl-10 pr-4 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* 사용 목적 */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[14px] font-medium text-[#2c2826]">
                        사용 목적
                      </label>
                      <textarea
                        placeholder="사용 목적을 간략하게 작성해주세요"
                        rows={4}
                        className="w-full bg-[#faf7f2] border border-[rgba(44,40,38,0.05)] rounded-[14px] px-4 py-3 text-[16px] text-[#2c2826] placeholder:text-[rgba(44,40,38,0.3)] outline-none focus:ring-2 focus:ring-[#f4b942]/30 focus:border-[#f4b942]/40 resize-none transition-all leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 회원가입 버튼 */}
              <button className="w-full h-13 bg-[#f4b942] text-white text-[16px] font-semibold rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:bg-[#e5aa35] active:scale-[0.99] transition-all mt-2">
                회원가입 완료
              </button>

              {/* 로그인 링크 */}
              <p className="text-center text-[14px] text-[rgba(44,40,38,0.5)]">
                이미 계정이 있으신가요?{' '}
                <Link
                  href="/login"
                  className="text-[#f4b942] font-medium hover:underline"
                >
                  로그인
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2c2826] text-white px-14 pt-12 pb-6">
        <div className="max-w-304 mx-auto">
          <div className="flex items-start justify-between mb-10">
            {/* Logo + Description */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#f4b942] rounded-[14px] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-[18px] font-bold">스타아트</span>
              </div>
              <div className="text-[14px] text-[rgba(255,255,255,0.5)] leading-relaxed">
                <p>아이들의 창작물을 진지한 예술 작품으로,</p>
                <p>온라인 3D 가상 전시회 플랫폼</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-semibold text-[rgba(255,255,255,0.8)]">
                  서비스
                </p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/exhibitions"
                      className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
                    >
                      전체 전시회
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
                    >
                      회원가입
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-semibold text-[rgba(255,255,255,0.8)]">
                  안내
                </p>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
                    >
                      서비스 소개
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
                    >
                      이용약관
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-[rgba(255,255,255,0.7)] transition-colors"
                    >
                      문의하기
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-6">
            <p className="text-center text-[12px] text-[rgba(255,255,255,0.3)]">
              © 2026 StarArt (스타아트). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

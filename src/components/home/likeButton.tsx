'use client';

import { useState, type MouseEvent } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  initialLikes: number;
  initialLiked?: boolean;
  isLoggedIn?: boolean;
  /** 추후 API 연결 시 실제 mutation 함수 */
  onToggle?: (liked: boolean) => void;
}

export default function LikeButton({
  initialLikes,
  initialLiked = false,
  isLoggedIn = false,
  onToggle,
}: LikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [likes, setLikes] = useState(initialLikes); // 총 좋아요 수

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) {
      // TODO: 로그인 모달 또는 로그인 페이지로 이동 / alert로 임시처리
      alert('로그인이 필요한 기능입니다.');
      return;
    }

    const newLiked = !liked;
    setLiked(newLiked);
    setLikes((prev) => prev + (newLiked ? 1 : -1));
    onToggle?.(newLiked);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={liked ? '좋아요 취소' : '좋아요'}
      aria-pressed={liked}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 transition-colors',
        isLoggedIn && 'group/like cursor-pointer',
        !isLoggedIn && 'cursor-default opacity-70'
      )}
    >
      <Heart
        className={cn(
          'h-3.5 w-3.5 transition-colors',
          liked
            ? 'fill-red-500 text-red-500'
            : isLoggedIn
              ? 'text-secondary/60 group-hover/like:text-red-500'
              : 'text-secondary/60'
        )}
      />
      <span
        className={cn(
          liked
            ? 'text-red-500'
            : isLoggedIn
              ? 'text-secondary/60 group-hover/like:text-red-500'
              : 'text-secondary/60'
        )}
      >
        {likes}
      </span>
    </button>
  );
}

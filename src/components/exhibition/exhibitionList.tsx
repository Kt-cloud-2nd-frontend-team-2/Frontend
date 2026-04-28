'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Star } from 'lucide-react';
import { ExhibitionCard, ExhibitionProps } from './exhibitionCard';
import { ExhibitionFilter, type ExhibitionSort } from './exhibitionFilter';
import { getStatus } from '@/lib/exhibitionStatus';

interface ExhibitionListProps {
  exhibitions: ExhibitionProps[];
  isTeacher?: boolean;
  isLoggedIn?: boolean;
  /** "내가 운영중인" 필터 기준 (호스트 이름 또는 사용자 id) */
  currentHost?: string;
}

export function ExhibitionList({
  exhibitions,
  isTeacher = false,
  isLoggedIn = false,
  currentHost,
}: ExhibitionListProps) {
  const [sort, setSort] = useState<ExhibitionSort>('latest');

  const visible = useMemo(() => {
    switch (sort) {
      case 'popular':
        return [...exhibitions].sort((a, b) => b.likes - a.likes);
      case 'oldest':
        return [...exhibitions].sort((a, b) =>
          a.startDate.localeCompare(b.startDate)
        );
      case 'upcoming':
        return exhibitions.filter(
          (e) => getStatus(e.startDate, e.endDate) === 'upcoming'
        );
      case 'ended':
        return exhibitions.filter(
          (e) => getStatus(e.startDate, e.endDate) === 'ended'
        );
      case 'mine':
        return exhibitions.filter((e) => e.host === currentHost);
      case 'latest':
      default:
        return [...exhibitions].sort((a, b) =>
          b.startDate.localeCompare(a.startDate)
        );
    }
  }, [exhibitions, sort, currentHost]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ExhibitionFilter
          value={sort}
          onChange={setSort}
          isTeacher={isTeacher}
        />

        {isTeacher && (
          <Link
            href="/exhibitions/new"
            className="bg-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E09415]"
          >
            <Plus className="h-4 w-4" />
            전시회 만들기
          </Link>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-1 py-28 text-center">
          <div className="bg-primary/10 mb-4 flex h-20 w-20 items-center justify-center rounded-2xl">
            <Star className="text-primary h-10 w-10" strokeWidth={2} />
          </div>
          <h3 className="text-secondary text-lg font-bold">전시회가 없어요</h3>
          <p className="text-secondary/40 text-sm">
            아직 등록된 전시회가 없습니다
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((exhibition) => (
            <ExhibitionCard
              key={exhibition.id}
              exhibition={exhibition}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      )}
    </section>
  );
}

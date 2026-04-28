'use client';

import { cn } from '@/lib/utils';

export type ExhibitionSort =
  | 'latest'
  | 'popular'
  | 'oldest'
  | 'upcoming'
  | 'ended'
  | 'mine';

const BASE_FILTERS: { value: ExhibitionSort; label: string }[] = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'oldest', label: '오래된 순' },
  { value: 'upcoming', label: '예정된 전시' },
  { value: 'ended', label: '종료된 전시' },
];

const TEACHER_FILTER: { value: ExhibitionSort; label: string } = {
  value: 'mine',
  label: '내가 운영중인',
};

interface ExhibitionFilterProps {
  value: ExhibitionSort;
  onChange: (value: ExhibitionSort) => void;
  isTeacher?: boolean;
}

export function ExhibitionFilter({
  value,
  onChange,
  isTeacher = false,
}: ExhibitionFilterProps) {
  const filters = isTeacher ? [...BASE_FILTERS, TEACHER_FILTER] : BASE_FILTERS;

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = filter.value === value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-secondary/60 hover:bg-primary/10 hover:text-secondary bg-white'
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

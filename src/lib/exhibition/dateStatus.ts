export type ExhibitionStatus = 'ongoing' | 'upcoming' | 'ended';

export function getStatus(
  startDate: string,
  endDate?: string
): ExhibitionStatus {
  const now = Date.now();
  const start = new Date(startDate).getTime();
  const end = endDate ? new Date(endDate).getTime() : start;

  if (now < start) return 'upcoming';
  if (now > end) return 'ended';
  return 'ongoing';
}

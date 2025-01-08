import { BoothActiveDay } from '../types/BoothActiveDay';

export function parseActiveDayOrNull(
  rawActiveDay: string | null,
): BoothActiveDay | null {
  switch (rawActiveDay) {
    case BoothActiveDay[BoothActiveDay.day1]:
      return BoothActiveDay.day1;
    case BoothActiveDay[BoothActiveDay.day2]:
      return BoothActiveDay.day2;
    case BoothActiveDay[BoothActiveDay.day3]:
      return BoothActiveDay.day3;
    default:
      return null;
  }
}

import { BoothActiveDay, boothActiveDayArray } from '../types/BoothActiveDay';

// TODO: add test
export function parseActiveDayOrNull(
  rawActiveDay: string | null,
): BoothActiveDay | null {
  if (rawActiveDay === null) {
    return null;
  }

  if (boothActiveDayArray.includes(rawActiveDay as BoothActiveDay)) {
    return rawActiveDay as BoothActiveDay;
  }

  return null;
}

// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = [
  'FF45_DAY_1',
  'FF45_DAY_2',
  'FF45_DAY_3',
] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = boothActiveDayArray[0];

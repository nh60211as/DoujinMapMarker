// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = [
  'FF46_DAY_1',
  'FF46_DAY_2',
  'FF46_DAY_3',
] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = boothActiveDayArray[0];

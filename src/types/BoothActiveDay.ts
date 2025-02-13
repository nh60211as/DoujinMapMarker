export const boothActiveDayArray = ['day1', 'day2', 'day3'] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

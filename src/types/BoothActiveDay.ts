// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = ['CWT72_DAY_1', 'CWT72_DAY_2'] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = boothActiveDayArray[0];

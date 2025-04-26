// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = ['IF6_DAY_1'] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = 'IF6_DAY_1';

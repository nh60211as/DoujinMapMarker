// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = ['PF42_DAY_1', 'PF42_DAY_2'] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = 'PF42_DAY_1';

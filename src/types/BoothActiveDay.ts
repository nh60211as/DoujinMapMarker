// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = ['CWT70_DAY_1', 'CWT70_DAY_2'] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = 'CWT70_DAY_1';

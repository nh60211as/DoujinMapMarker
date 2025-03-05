// NOTE: The implementation should be changed with each event
export const boothActiveDayArray = [
  'CWTxACCF_DAY_1',
  'CWTxACCF_DAY_2',
  'CWTxACCF_DAY_3',
] as const;

export type BoothActiveDay = (typeof boothActiveDayArray)[number];

export const DEFAULT_BOOTH_ACTIVE_DAY: BoothActiveDay = 'CWTxACCF_DAY_1';

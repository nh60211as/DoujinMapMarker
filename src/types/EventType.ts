// NOTE: The implementation should be changed with each event
export const eventTypeArray = [
  'FF44',
  'FF45',
  'FF46',
  'PF42',
  'PF43',
  'IF6',
  'CWT70',
  'CWT71',
  'CWT72',
  'CWTxACCF',
] as const;

export type EventType = (typeof eventTypeArray)[number];

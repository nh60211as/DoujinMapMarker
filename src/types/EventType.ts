// NOTE: The implementation should be changed with each event
export const eventTypeArray = [
  'FF44',
  'CWTxACCF',
  'PF42',
  'IF6',
  'CWT70',
] as const;

export type EventType = (typeof eventTypeArray)[number];

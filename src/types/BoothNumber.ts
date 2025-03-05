import { IntRangeExclusive } from '../utils/RangeUtils';

// NOTE: The implementation should be changed with each event
export type BoothNumber =
  | {
      row: 'E';
      number: IntRangeExclusive<1, 97>;
    }
  | {
      row: 'F';
      number: IntRangeExclusive<1, 41>;
    };

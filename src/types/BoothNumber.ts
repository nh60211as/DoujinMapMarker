import { IntRangeExclusive } from '../utils/RangeUtils';

export type BoothNumber =
  | {
      row: 'A';
      number: IntRangeExclusive<1, 23>;
    }
  | {
      row:
        | 'B'
        | 'C'
        | 'D'
        | 'E'
        | 'F'
        | 'G'
        | 'H'
        | 'I'
        | 'J'
        | 'K'
        | 'L'
        | 'M'
        | 'N';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'O' | 'P' | 'Q' | 'R' | 'S' | 'T';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'U';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'W';
      number: IntRangeExclusive<1, 43>;
    };

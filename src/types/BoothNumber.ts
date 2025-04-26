import { IntRangeExclusive } from '../utils/RangeUtils';

// NOTE: The implementation should be changed with each event
export type BoothNumber =
  | {
      row: 'I';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'J';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'K';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'L';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'M';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'N';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'O';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'P';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'Q';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'R';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'S';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'T';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'U';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'V';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'W';
      number: IntRangeExclusive<1, 29>;
    }
  | {
      row: 'X';
      number: IntRangeExclusive<1, 29>;
    }
  | {
      row: 'Y';
      number: IntRangeExclusive<1, 29>;
    }
  | {
      row: 'Z';
      number: IntRangeExclusive<1, 33>;
    };

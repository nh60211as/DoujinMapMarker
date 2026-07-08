import { IntRangeExclusive } from '../utils/RangeUtils';

// NOTE: The implementation should be changed with each event
export type BoothNumber =
  | {
      row: 'A';
      number: IntRangeExclusive<1, 23>;
    }
  | {
      row: 'B';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'C';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'D';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'E';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'F';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'G';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'H';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'I';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'J';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'K';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'L';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'M';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'N';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'O';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'P';
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'Q';
      number: IntRangeExclusive<1, 45>;
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
      number: IntRangeExclusive<1, 45>;
    }
  | {
      row: 'W';
      number: IntRangeExclusive<1, 43>;
    };

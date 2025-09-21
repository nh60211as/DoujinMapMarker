import { IntRangeExclusive } from '../utils/RangeUtils';

// NOTE: The implementation should be changed with each event
export type BoothNumber =
  | {
      row: 'A';
      number: IntRangeExclusive<1, 45>;
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
      row: 'M';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'N';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'O';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'P';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'Q';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'R';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'S';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'T';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'U';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'V';
      number: IntRangeExclusive<1, 49>;
    }
  | {
      row: 'W';
      number: IntRangeExclusive<1, 43>;
    };

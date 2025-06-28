import { IntRangeExclusive } from '../utils/RangeUtils';

// NOTE: The implementation should be changed with each event
export type BoothNumber =
  | {
      row: 'A';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'B';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'C';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'D';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'E';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'F';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'G';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'H';
      number: IntRangeExclusive<1, 37>;
    }
  | {
      row: 'I';
      number: IntRangeExclusive<1, 37>;
    }
  | {
      row: 'J';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'K';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'L';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'M';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'N';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'O';
      number: IntRangeExclusive<1, 81>;
    }
  | {
      row: 'P';
      number: IntRangeExclusive<1, 41>;
    }
  | {
      row: 'Q';
      number: IntRangeExclusive<1, 34>;
    }
  | {
      row: 'R';
      number: IntRangeExclusive<1, 33>;
    }
  | {
      row: 'S';
      number: IntRangeExclusive<1, 73>;
    }
  | {
      row: 'T';
      number: IntRangeExclusive<1, 73>;
    };

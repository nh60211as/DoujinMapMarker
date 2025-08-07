import { BoothNumber } from '../types/BoothNumber';
import { TargetingBoxDimension } from '../types/TargetingBoxDimension';
import { isBetween } from './NumberUtils';

export function boothNumberListToTargetingBoxDimension(
  boothNumberList: Array<BoothNumber>,
): TargetingBoxDimension {
  switch (boothNumberList.length) {
    case 1:
      return boothNumberToTargetingBoxDimension(boothNumberList[0]);
    case 2:
      return boothNumberListOf2ToTargetingBoxDimension(
        boothNumberList[0],
        boothNumberList[1],
      );
    default:
      return boothNumberListGreaterThan2ToTargetingBoxDimension(
        boothNumberList,
      );
  }
}

function boothNumberListOf2ToTargetingBoxDimension(
  boothNumber1: BoothNumber,
  boothNumber2: BoothNumber,
): TargetingBoxDimension {
  const box1: TargetingBoxDimension =
    boothNumberToTargetingBoxDimension(boothNumber1);
  const box2: TargetingBoxDimension =
    boothNumberToTargetingBoxDimension(boothNumber2);
  const x = Math.min(box1.x, box2.x);
  const y = Math.min(box1.y, box2.y);
  const width = Math.max(box1.x + box1.width, box2.x + box2.width) - x;
  const height = Math.max(box1.y + box1.height, box2.y + box2.height) - y;

  return { x, y, width, height };
}

function boothNumberListGreaterThan2ToTargetingBoxDimension(
  boothNumberList: Array<BoothNumber>,
): TargetingBoxDimension {
  const smallestBooth: BoothNumber = boothNumberList.reduce((min, booth) =>
    booth.number < min.number ? booth : min,
  );
  const largestBooth: BoothNumber = boothNumberList.reduce((max, booth) =>
    booth.number > max.number ? booth : max,
  );

  return boothNumberListOf2ToTargetingBoxDimension(smallestBooth, largestBooth);
}

// NOTE: The implementation should be changed with each event
function boothNumberToTargetingBoxDimension(
  boothNumber: BoothNumber,
): TargetingBoxDimension {
  const A_TO_M_STARTING_Y_AXIS = 1968;
  const N_TO_V_STARTING_Y_AXIS = 1158;
  const A_TO_V_BOOTH_X_SIZE = 41.5;
  const A_TO_V_BOOTH_Y_SIZE = 26.59090909090909;

  const W_Y_AXIS = 399;
  const W_BOOTH_X_SIZE = 26.625;
  const W_BOOTH_Y_SIZE = 41;

  switch (boothNumber.row) {
    case 'A':
      return {
        x: get_A_to_V_starting_X(boothNumber.row),
        y:
          A_TO_M_STARTING_Y_AXIS -
          (boothNumber.number - 1) * A_TO_V_BOOTH_Y_SIZE,
        width: A_TO_V_BOOTH_X_SIZE,
        height: A_TO_V_BOOTH_Y_SIZE,
      };
    case 'B':
    case 'C':
    case 'D':
    case 'E':
    case 'F':
    case 'G':
    case 'H':
    case 'I':
    case 'J':
    case 'K':
    case 'L':
    case 'M':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x: get_A_to_V_starting_X(boothNumber.row),
          y:
            A_TO_M_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_V_starting_X(boothNumber.row) - A_TO_V_BOOTH_X_SIZE,
          y:
            A_TO_M_STARTING_Y_AXIS -
            (44 - boothNumber.number) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      }
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'U':
    case 'V':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x: get_A_to_V_starting_X(boothNumber.row),
          y:
            N_TO_V_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_V_starting_X(boothNumber.row) - A_TO_V_BOOTH_X_SIZE,
          y:
            N_TO_V_STARTING_Y_AXIS -
            (44 - boothNumber.number) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      }

    case 'W':
      if (isBetween(boothNumber.number, 1, 6)) {
        return {
          x: 2898 - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 7, 14)) {
        return {
          x: 2526 - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 15, 24)) {
        return {
          x: 2278 - (boothNumber.number - 15) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 34)) {
        return {
          x: 1784 - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
      // 35 ~ 42
      else {
        return {
          x: 1476 - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
  }
}

function get_A_to_V_starting_X(row: string): number {
  switch (row) {
    case 'A':
      return 3216;
    case 'B':
      return 3087;
    case 'C':
      return 2926;
    case 'D':
      return 2765;
    case 'E':
      return 2604;
    case 'F':
      return 2443;
    case 'G':
      return 2282;
    case 'H':
      return 2121;
    case 'I':
      return 1835;
    case 'J':
      return 1675;
    case 'K':
      return 1516;
    case 'L':
      return 1356;
    case 'M':
      return 1196;
    case 'N':
      return 2726;
    case 'O':
      return 2539;
    case 'P':
      return 2353;
    case 'Q':
      return 2165;
    case 'R':
      return 1978;
    case 'S':
      return 1791;
    case 'T':
      return 1603;
    case 'U':
      return 1422;
    case 'V':
      return 1235;
    default:
      return 0;
  }
}

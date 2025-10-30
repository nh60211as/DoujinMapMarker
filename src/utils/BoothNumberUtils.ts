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
  const A_TO_C_STARTING_Y_AXIS = 1151;
  const M_TO_V_STARTING_Y_AXIS = 676;
  const A_TO_V_BOOTH_X_SIZE = 24;
  const A_TO_V_BOOTH_Y_SIZE = 15.5;

  const W_Y_AXIS = 232;
  const W_BOOTH_X_SIZE = 15.5;
  const W_BOOTH_Y_SIZE = 24;

  switch (boothNumber.row) {
    case 'A':
    case 'B':
    case 'C':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x: get_A_to_V_starting_X(boothNumber.row),
          y:
            A_TO_C_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_V_starting_X(boothNumber.row) - A_TO_V_BOOTH_X_SIZE,
          y:
            A_TO_C_STARTING_Y_AXIS -
            (44 - boothNumber.number) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      }
    case 'M':
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'U':
    case 'V':
      if (isBetween(boothNumber.number, 1, 24)) {
        return {
          x: get_A_to_V_starting_X(boothNumber.row),
          y:
            M_TO_V_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_V_starting_X(boothNumber.row) - A_TO_V_BOOTH_X_SIZE,
          y:
            M_TO_V_STARTING_Y_AXIS -
            (48 - boothNumber.number) * A_TO_V_BOOTH_Y_SIZE,
          width: A_TO_V_BOOTH_X_SIZE,
          height: A_TO_V_BOOTH_Y_SIZE,
        };
      }

    case 'W':
      if (isBetween(boothNumber.number, 1, 6)) {
        return {
          x: 1691 - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 7, 18)) {
        return {
          x: 1474 - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 19, 24)) {
        return {
          x: 1271 - (boothNumber.number - 19) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 34)) {
        return {
          x: 1040 - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
      // 35 ~ 42
      else {
        return {
          x: 861 - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
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
      return 1769;
    case 'B':
      return 1677;
    case 'C':
      return 1483;
    case 'M':
      return 1776;
    case 'N':
      return 1680;
    case 'O':
      return 1589;
    case 'P':
      return 1493;
    case 'Q':
      return 1396;
    case 'R':
      return 1300;
    case 'S':
      return 1203;
    case 'T':
      return 1107;
    case 'U':
      return 1010;
    case 'V':
      return 914;
    default:
      return 0;
  }
}

import { BoothNumber } from '../types/BoothNumber';
import { TargetingBoxDimension } from '../types/TargetingBoxDimension';
import { isBetween } from './NumberUtils';

export function toBoothNumberOrNull(
  rawBoothNumber: string,
): BoothNumber | null {
  if (rawBoothNumber.length !== 3) {
    return null;
  }

  // Example: rawBoothNumber [A01] => row [A], num [01]
  const row: string = rawBoothNumber.substring(0, 1);
  const num: string = rawBoothNumber.substring(1, 3);

  // TODO: use a more strict parsing strategy
  return { row: row, number: parseInt(num, 10) } as BoothNumber;
}

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
  const A_TO_M_STARTING_Y_AXIS = 574;
  const N_TO_V_STARTING_Y_AXIS = 338;
  const A_TO_V_BOOTH_X_SIZE = 12;
  const A_TO_V_BOOTH_Y_SIZE = 7.772727272727273;

  const W_Y_AXIS = 116;
  const W_BOOTH_X_SIZE = 7.8;
  const W_BOOTH_Y_SIZE = 12;

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
          x: 846 - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 7, 14)) {
        return {
          x: 737 - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 15, 24)) {
        return {
          x: 667 - (boothNumber.number - 15) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 34)) {
        return {
          x: 520 - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
      // 35 ~ 42
      else {
        return {
          x: 431 - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
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
      return 938;
    case 'B':
      return 901;
    case 'C':
      return 854;
    case 'D':
      return 807;
    case 'E':
      return 760;
    case 'F':
      return 713;
    case 'G':
      return 666;
    case 'H':
      return 619;
    case 'I':
      return 535;
    case 'J':
      return 489;
    case 'K':
      return 442;
    case 'L':
      return 395;
    case 'M':
      return 349;
    case 'N':
      return 795;
    case 'O':
      return 741;
    case 'P':
      return 686;
    case 'Q':
      return 632;
    case 'R':
      return 577;
    case 'S':
      return 522;
    case 'T':
      return 468;
    case 'U':
      return 415;
    case 'V':
      return 360;
    default:
      return 0;
  }
}

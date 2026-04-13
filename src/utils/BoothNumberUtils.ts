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
  const A_TO_C_STARTING_Y_AXIS = 3807;
  const L_TO_S_STARTING_Y_AXIS = 2224;
  const A_TO_S_BOOTH_X_SIZE = 79;
  const A_TO_S_BOOTH_Y_SIZE = 51.04166666666667;

  const W_Y_AXIS = 767;
  const W_BOOTH_X_SIZE = 51.16666666666667;
  const W_BOOTH_Y_SIZE = 79;

  switch (boothNumber.row) {
    case 'A':
    case 'B':
    case 'C':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x: get_A_to_S_starting_X(boothNumber.row),
          y:
            A_TO_C_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_S_BOOTH_Y_SIZE,
          width: A_TO_S_BOOTH_X_SIZE,
          height: A_TO_S_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_S_starting_X(boothNumber.row) - A_TO_S_BOOTH_X_SIZE,
          y:
            A_TO_C_STARTING_Y_AXIS -
            (44 - boothNumber.number) * A_TO_S_BOOTH_Y_SIZE,
          width: A_TO_S_BOOTH_X_SIZE,
          height: A_TO_S_BOOTH_Y_SIZE,
        };
      }
    case 'L':
    case 'M':
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
      if (isBetween(boothNumber.number, 1, 24)) {
        return {
          x: get_A_to_S_starting_X(boothNumber.row),
          y:
            L_TO_S_STARTING_Y_AXIS -
            (boothNumber.number - 1) * A_TO_S_BOOTH_Y_SIZE,
          width: A_TO_S_BOOTH_X_SIZE,
          height: A_TO_S_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: get_A_to_S_starting_X(boothNumber.row) - A_TO_S_BOOTH_X_SIZE,
          y:
            L_TO_S_STARTING_Y_AXIS -
            (48 - boothNumber.number) * A_TO_S_BOOTH_Y_SIZE,
          width: A_TO_S_BOOTH_X_SIZE,
          height: A_TO_S_BOOTH_Y_SIZE,
        };
      }

    case 'W':
      if (isBetween(boothNumber.number, 1, 6)) {
        return {
          x: 5564 - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 7, 18)) {
        return {
          x: 4851 - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 19, 24)) {
        return {
          x: 4185 - (boothNumber.number - 19) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 34)) {
        return {
          x: 3425 - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
      // 35 ~ 42
      else {
        return {
          x: 2835 - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
  }
}

function get_A_to_S_starting_X(row: string): number {
  switch (row) {
    case 'A':
      return 4923;
    case 'B':
      return 4580;
    case 'C':
      return 4240;
    case 'L':
      return 5252;
    case 'M':
      return 4932;
    case 'N':
      return 4614;
    case 'O':
      return 4295;
    case 'P':
      return 3977;
    case 'Q':
      return 3658;
    case 'R':
      return 3339;
    case 'S':
      return 3022;
    default:
      return 0;
  }
}

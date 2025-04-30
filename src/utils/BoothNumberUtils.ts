import { BoothNumber } from '../types/BoothNumber';
import { TargetingBoxDimension } from '../types/TargetingBoxDimension';

// NOTE: The implementation should be changed with each event
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

function boothNumberToTargetingBoxDimension(
  boothNumber: BoothNumber,
): TargetingBoxDimension {
  const A_TO_C_STARTING_Y_AXIS = 1357;
  const L_TO_S_STARTING_Y_AXIS = 793;
  const BOOTH_X_SIZE = 28.5;
  const BOOTH_Y_SIZE = 18.16666666666667;
  const W_1_X_AXIS = 1983;
  const W_7_X_AXIS = 1729;
  const W_19_X_AXIS = 1492;
  const W_25_X_AXIS = 1220;
  const W_35_X_AXIS = 1010;
  const W_Y_AXIS = 273;
  const W_BOOTH_X_SIZE = 18.25;
  const W_BOOTH_Y_SIZE = 29;

  switch (boothNumber.row) {
    case 'A':
    case 'B':
    case 'C':
      if (1 <= boothNumber.number && boothNumber.number <= 22) {
        return {
          x: getAToS_X_Axis(boothNumber.row),
          y: A_TO_C_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 23 ~
        return {
          x: getAToS_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: A_TO_C_STARTING_Y_AXIS - (44 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
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
      if (1 <= boothNumber.number && boothNumber.number <= 24) {
        return {
          x: getAToS_X_Axis(boothNumber.row),
          y: L_TO_S_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 25 ~
        return {
          x: getAToS_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: L_TO_S_STARTING_Y_AXIS - (48 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'W':
      switch (boothNumber.number) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          return {
            x: W_1_X_AXIS - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
            y: W_Y_AXIS,
            width: W_BOOTH_X_SIZE,
            height: W_BOOTH_Y_SIZE,
          };
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          return {
            x: W_7_X_AXIS - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
            y: W_Y_AXIS,
            width: W_BOOTH_X_SIZE,
            height: W_BOOTH_Y_SIZE,
          };
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
          return {
            x: W_19_X_AXIS - (boothNumber.number - 19) * W_BOOTH_X_SIZE,
            y: W_Y_AXIS,
            width: W_BOOTH_X_SIZE,
            height: W_BOOTH_Y_SIZE,
          };
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
          return {
            x: W_25_X_AXIS - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
            y: W_Y_AXIS,
            width: W_BOOTH_X_SIZE,
            height: W_BOOTH_Y_SIZE,
          };
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
          return {
            x: W_35_X_AXIS - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
            y: W_Y_AXIS,
            width: W_BOOTH_X_SIZE,
            height: W_BOOTH_Y_SIZE,
          };
      }
  }
}

function getAToS_X_Axis(
  row: 'A' | 'B' | 'C' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S',
): number {
  switch (row) {
    case 'A':
      return 1726;
    case 'B':
      return 1612;
    case 'C':
      return 1494;
    case 'L':
      return 1872;
    case 'M':
      return 1758;
    case 'N':
      return 1644;
    case 'O':
      return 1531;
    case 'P':
      return 1417;
    case 'Q':
      return 1304;
    case 'R':
      return 1190;
    case 'S':
      return 1077;
  }
}

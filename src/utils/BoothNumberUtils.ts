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
      throw Error(
        `Unsupported boothNumberList size: [${boothNumberList.length}]`,
      );
  }
}

function boothNumberToTargetingBoxDimension(
  boothNumber: BoothNumber,
): TargetingBoxDimension {
  const A_TO_L_STARTING_Y_AXIS = 1968;
  const BOOTH_X_SIZE = 41.5;
  const BOOTH_Y_SIZE = 26.59090909090909;

  switch (boothNumber.row) {
    case 'E':
    case 'F':
      if (1 <= boothNumber.number && boothNumber.number <= 22) {
        return {
          x: getAToU_X_Axis(boothNumber.row),
          y: A_TO_L_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 23 ~
        return {
          x: getAToU_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: A_TO_L_STARTING_Y_AXIS - (44 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
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

function getAToU_X_Axis(
  row:
    | 'A'
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
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U',
): number {
  switch (row) {
    case 'A':
      return 3216;
    case 'B':
      return 3061;
    case 'C':
      return 2893;
    case 'D':
      return 2724;
    case 'E':
      return 2556;
    case 'F':
      return 2388;
    case 'G':
      return 2217;
    case 'H':
      return 1911;
    case 'I':
      return 1743;
    case 'J':
      return 1575;
    case 'K':
      return 1407;
    case 'L':
      return 1235;
    case 'M':
      return 2726;
    case 'N':
      return 2538;
    case 'O':
      return 2352;
    case 'P':
      return 2166;
    case 'Q':
      return 1980;
    case 'R':
      return 1794;
    case 'S':
      return 1607;
    case 'T':
      return 1421;
    case 'U':
      return 1235;
  }
}

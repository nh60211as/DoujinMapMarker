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
  const A_TO_C_STARTING_Y_AXIS = 710;
  const M_TO_V_STARTING_Y_AXIS = 417;
  const A_TO_V_BOOTH_X_SIZE = 14.5;
  const A_TO_V_BOOTH_Y_SIZE = 9.590909090909091;

  const W_Y_AXIS = 143;
  const W_BOOTH_X_SIZE = 9.583333333333333;
  const W_BOOTH_Y_SIZE = 15;

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
          x: 1043 - (boothNumber.number - 1) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 7, 18)) {
        return {
          x: 909 - (boothNumber.number - 7) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 19, 24)) {
        return {
          x: 784 - (boothNumber.number - 19) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 34)) {
        return {
          x: 642 - (boothNumber.number - 25) * W_BOOTH_X_SIZE,
          y: W_Y_AXIS,
          width: W_BOOTH_X_SIZE,
          height: W_BOOTH_Y_SIZE,
        };
      }
      // 35 ~ 42
      else {
        return {
          x: 531 - (boothNumber.number - 35) * W_BOOTH_X_SIZE,
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
      return 1092;
    case 'B':
      return 1035;
    case 'C':
      return 915;
    case 'M':
      return 1096;
    case 'N':
      return 1036;
    case 'O':
      return 980;
    case 'P':
      return 921;
    case 'Q':
      return 861;
    case 'R':
      return 802;
    case 'S':
      return 742;
    case 'T':
      return 683;
    case 'U':
      return 623;
    case 'V':
      return 564;
    default:
      return 0;
  }
}

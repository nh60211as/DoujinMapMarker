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
  const A_TO_G_FIRST_HALF_STARTING_Y_AXIS = 1216;
  const A_TO_G_SECOND_HALF_STARTING_Y_AXIS = 1730;
  const J_TO_P_FIRST_HALF_STARTING_Y_AXIS = 1169;
  const J_TO_P_SECOND_HALF_STARTING_Y_AXIS = 1627;
  const S_TO_T_FIRST_HALF_STARTING_Y_AXIS = 1191;
  const S_TO_T_SECOND_HALF_STARTING_Y_AXIS = 1652;
  const VERTICAL_BOOTH_X_SIZE = 20.8125;
  const VERTICAL_BOOTH_Y_SIZE = 55.5;

  const H_TO_I_FIRST_HALF_STARTING_X_AXIS = 615;
  const H_TO_I_SECOND_HALF_STARTING_X_AXIS = 1126;
  const Q_TO_R_FIRST_HALF_STARTING_X_AXIS = 2853;
  const Q_TO_R_SECOND_HALF_STARTING_X_AXIS = 3286;
  const HORIZONTAL_BOOTH_X_SIZE = 25.16666666666667;
  const HORIZONTAL_BOOTH_Y_SIZE = 27;

  switch (boothNumber.row) {
    case 'A':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x: 652,
          y:
            A_TO_G_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * VERTICAL_BOOTH_Y_SIZE,
          width: VERTICAL_BOOTH_X_SIZE,
          height: VERTICAL_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: 652,
          y:
            A_TO_G_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 21) * VERTICAL_BOOTH_Y_SIZE,
          width: VERTICAL_BOOTH_X_SIZE,
          height: VERTICAL_BOOTH_Y_SIZE,
        };
      }
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
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
      return {
        x: 0,
        y: 0,
        width: VERTICAL_BOOTH_X_SIZE,
        height: VERTICAL_BOOTH_Y_SIZE,
      };
  }
}

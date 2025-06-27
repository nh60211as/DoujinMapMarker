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
  const A_TO_G_BOOTH_X_SIZE = 55.5;
  const A_TO_G_BOOTH_Y_SIZE = 25.05263157894737;

  const J_TO_P_FIRST_HALF_STARTING_Y_AXIS = 1169;
  const J_TO_P_SECOND_HALF_STARTING_Y_AXIS = 1627;
  const J_TO_P_BOOTH_X_SIZE = 49;
  const J_TO_P_BOOTH_Y_SIZE = 22.31578947368421;

  const S_TO_T_FIRST_HALF_STARTING_Y_AXIS = 1191;
  const S_TO_T_SECOND_HALF_STARTING_Y_AXIS = 1652;
  const S_TO_T_BOOTH_X_SIZE = 49.5;
  const S_TO_T_BOOTH_Y_SIZE = 22.35294117647059;

  const H_TO_I_FIRST_HALF_STARTING_X_AXIS = 615;
  const H_TO_I_SECOND_HALF_STARTING_X_AXIS = 1126;
  const H_TO_I_BOOTH_X_SIZE = 25.16666666666667;
  const H_TO_I_BOOTH_Y_SIZE = 27;

  const Q_TO_R_FIRST_HALF_STARTING_X_AXIS = 2853;
  const Q_TO_R_SECOND_HALF_STARTING_X_AXIS = 3291;
  const Q_TO_R_BOOTH_X_SIZE = 21.83333333333333;
  const Q_TO_R_BOOTH_Y_SIZE = 27;

  switch (boothNumber.row) {
    case 'A':
    case 'G':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            A_TO_G_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            A_TO_G_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 21) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      }
    case 'J':
    case 'P':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            J_TO_P_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            J_TO_P_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 21) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      }
    case 'B':
    case 'C':
    case 'D':
    case 'E':
    case 'F':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            A_TO_G_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 21, 40)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            A_TO_G_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 21) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 41, 60)) {
        return {
          x: getVerticalStartingX(boothNumber.row) + A_TO_G_BOOTH_X_SIZE,
          y:
            A_TO_G_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 41) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: getVerticalStartingX(boothNumber.row) + A_TO_G_BOOTH_X_SIZE,
          y:
            A_TO_G_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 61) * A_TO_G_BOOTH_Y_SIZE,
          width: A_TO_G_BOOTH_X_SIZE,
          height: A_TO_G_BOOTH_Y_SIZE,
        };
      }
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'O':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            J_TO_P_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 21, 40)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            J_TO_P_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 21) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 41, 60)) {
        return {
          x: getVerticalStartingX(boothNumber.row) + J_TO_P_BOOTH_X_SIZE,
          y:
            J_TO_P_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 41) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: getVerticalStartingX(boothNumber.row) + J_TO_P_BOOTH_X_SIZE,
          y:
            J_TO_P_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 61) * J_TO_P_BOOTH_Y_SIZE,
          width: J_TO_P_BOOTH_X_SIZE,
          height: J_TO_P_BOOTH_Y_SIZE,
        };
      }
    case 'S':
    case 'T':
      if (isBetween(boothNumber.number, 1, 18)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            S_TO_T_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 1) * S_TO_T_BOOTH_Y_SIZE,
          width: S_TO_T_BOOTH_X_SIZE,
          height: S_TO_T_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 19, 36)) {
        return {
          x: getVerticalStartingX(boothNumber.row),
          y:
            S_TO_T_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 19) * S_TO_T_BOOTH_Y_SIZE,
          width: S_TO_T_BOOTH_X_SIZE,
          height: S_TO_T_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 37, 54)) {
        return {
          x: getVerticalStartingX(boothNumber.row) + S_TO_T_BOOTH_X_SIZE,
          y:
            S_TO_T_FIRST_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 37) * S_TO_T_BOOTH_Y_SIZE,
          width: S_TO_T_BOOTH_X_SIZE,
          height: S_TO_T_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x: getVerticalStartingX(boothNumber.row) + S_TO_T_BOOTH_X_SIZE,
          y:
            S_TO_T_SECOND_HALF_STARTING_Y_AXIS +
            (boothNumber.number - 55) * S_TO_T_BOOTH_Y_SIZE,
          width: S_TO_T_BOOTH_X_SIZE,
          height: S_TO_T_BOOTH_Y_SIZE,
        };
      }
    case 'H':
    case 'I':
      if (isBetween(boothNumber.number, 1, 18)) {
        return {
          x:
            H_TO_I_FIRST_HALF_STARTING_X_AXIS +
            (boothNumber.number - 1) * H_TO_I_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: H_TO_I_BOOTH_X_SIZE,
          height: H_TO_I_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            H_TO_I_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 19) * H_TO_I_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: H_TO_I_BOOTH_X_SIZE,
          height: H_TO_I_BOOTH_Y_SIZE,
        };
      }
    case 'Q':
      if (isBetween(boothNumber.number, 1, 18)) {
        return {
          x:
            Q_TO_R_FIRST_HALF_STARTING_X_AXIS +
            (boothNumber.number - 1) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 19, 30)) {
        return {
          x:
            Q_TO_R_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 19) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      } else if (boothNumber.number === 31) {
        return {
          x:
            Q_TO_R_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 19) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE * 2,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      } else if (boothNumber.number === 32) {
        return {
          x:
            Q_TO_R_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 18) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE * 2,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      }
      // boothNumber.number === 33
      else {
        return {
          x:
            Q_TO_R_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 17) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE * 2,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      }
    case 'R':
      if (isBetween(boothNumber.number, 1, 18)) {
        return {
          x:
            Q_TO_R_FIRST_HALF_STARTING_X_AXIS +
            (boothNumber.number - 1) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            Q_TO_R_SECOND_HALF_STARTING_X_AXIS +
            (boothNumber.number - 19) * Q_TO_R_BOOTH_X_SIZE,
          y: getHorizontalStartingY(boothNumber.row),
          width: Q_TO_R_BOOTH_X_SIZE,
          height: Q_TO_R_BOOTH_Y_SIZE,
        };
      }
  }
}

function getVerticalStartingX(row: string): number {
  switch (row) {
    case 'A':
      return 652;
    case 'G':
      return 1477;
    case 'J':
      return 2878;
    case 'P':
      return 3613;
    case 'B':
      return 743;
    case 'C':
      return 890;
    case 'D':
      return 1036;
    case 'E':
      return 1183;
    case 'F':
      return 1330;
    case 'K':
      return 2958;
    case 'L':
      return 3090;
    case 'M':
      return 3220;
    case 'N':
      return 3351;
    case 'O':
      return 3482;
    case 'S':
      return 6025;
    case 'T':
      return 6155;
    default:
      return 0;
  }
}

function getHorizontalStartingY(row: string): number {
  switch (row) {
    case 'H':
      return 1109;
    case 'I':
      return 2250;
    case 'Q':
      return 1072;
    case 'R':
      return 2089;
    default:
      return 0;
  }
}

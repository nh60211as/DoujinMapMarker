import { BoothNumber } from "../types/BoothNumber";
import { TargetingBoxDimension } from "../types/TargetingBoxDimension";

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
  const A_TO_L_STARTING_Y_AXIS = 1969;
  const M_TO_U_STARTING_Y_AXIS = 1158;
  const BOOTH_X_SIZE = 41;
  const BOOTH_Y_SIZE = 26.6190476190476;
  const W_1_X_AXIS = 2898;
  const W_7_X_AXIS = 2526;
  const W_19_X_AXIS = 2179;
  const W_25_X_AXIS = 1783;
  const W_35_X_AXIS = 1476;
  const W_Y_AXIS = 399;
  const W_BOOTH_X_SIZE = 28;
  const W_BOOTH_Y_SIZE = 41;

  switch (boothNumber.row) {
    case "A":
      return {
        x: getAToU_X_Axis(boothNumber.row),
        y: A_TO_L_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
        width: BOOTH_X_SIZE,
        height: BOOTH_Y_SIZE,
      };
    case "B":
    case "C":
    case "D":
    case "E":
    case "F":
    case "G":
    case "H":
    case "I":
    case "J":
    case "K":
    case "L":
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
    case "M":
    case "N":
      if (1 <= boothNumber.number && boothNumber.number <= 22) {
        return {
          x: getAToU_X_Axis(boothNumber.row),
          y: M_TO_U_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 23 ~
        return {
          x: getAToU_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: M_TO_U_STARTING_Y_AXIS - (44 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case "O":
    case "P":
    case "Q":
    case "R":
    case "S":
    case "T":
      if (1 <= boothNumber.number && boothNumber.number <= 24) {
        return {
          x: getAToU_X_Axis(boothNumber.row),
          y: M_TO_U_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 25 ~
        return {
          x: getAToU_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: M_TO_U_STARTING_Y_AXIS - (48 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case "U":
      if (1 <= boothNumber.number && boothNumber.number <= 22) {
        return {
          x: getAToU_X_Axis(boothNumber.row),
          y: M_TO_U_STARTING_Y_AXIS - (boothNumber.number - 1) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        // 23 ~
        return {
          x: getAToU_X_Axis(boothNumber.row) - BOOTH_X_SIZE,
          y: M_TO_U_STARTING_Y_AXIS - (44 - boothNumber.number) * BOOTH_Y_SIZE,
          width: BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case "W":
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
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U",
): number {
  switch (row) {
    case "A":
      return 3216;
    case "B":
      return 3020;
    case "C":
      return 2851;
    case "D":
      return 2683;
    case "E":
      return 2512;
    case "F":
      return 2347;
    case "G":
      return 2175;
    case "H":
      return 1870;
    case "I":
      return 1702;
    case "J":
      return 1533;
    case "K":
      return 1365;
    case "L":
      return 1193;
    case "M":
      return 2726;
    case "N":
      return 2538;
    case "O":
      return 2352;
    case "P":
      return 2166;
    case "Q":
      return 1980;
    case "R":
      return 1794;
    case "S":
      return 1607;
    case "T":
      return 1421;
    case "U":
      return 1235;
  }
}

import { BoothNumber } from '../types/BoothNumber';
import { TargetingBoxDimension } from '../types/TargetingBoxDimension';
import { isBetween } from './NumberUtils';

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
  const I_TO_Q_STARTING_X_AXIS = 1154;
  const R_TO_Z_STARTING_X_AXIS = 656;
  const I_TO_Q_BOOTH_X_SIZE = 21.05;
  const R_TO_V_BOOTH_X_SIZE = 20.81818181818182;
  const W_TO_Y_BOOTH_X_SIZE = 20.42857142857143;
  const Z_BOOTH_X_SIZE = 20.8125;
  const BOOTH_Y_SIZE = 23;

  switch (boothNumber.row) {
    case 'I':
    case 'J':
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x:
            I_TO_Q_STARTING_X_AXIS -
            (boothNumber.number - 1) * I_TO_Q_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: I_TO_Q_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            I_TO_Q_STARTING_X_AXIS -
            (boothNumber.number - 20 - 1) * I_TO_Q_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 21 }),
          width: I_TO_Q_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'R':
    case 'S':
    case 'T':
    case 'U':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * R_TO_V_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: R_TO_V_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 22 - 1) * R_TO_V_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 23 }),
          width: R_TO_V_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'V':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * R_TO_V_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: R_TO_V_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 20 - 1) * R_TO_V_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 21 }),
          width: R_TO_V_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }

    case 'W':
    case 'X':
    case 'Y':
      if (isBetween(boothNumber.number, 1, 14)) {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * W_TO_Y_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: W_TO_Y_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 14 - 1) * W_TO_Y_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 15 }),
          width: W_TO_Y_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'Z':
      if (isBetween(boothNumber.number, 1, 16)) {
        return {
          x: R_TO_Z_STARTING_X_AXIS - (boothNumber.number - 1) * Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            R_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 16 - 1) * Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 17 }),
          width: Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
  }
}

function getY_Axis(
  boothNumber:
    | {
        row: 'I';
        number: 1;
      }
    | {
        row: 'I';
        number: 21;
      }
    | {
        row: 'J';
        number: 1;
      }
    | {
        row: 'J';
        number: 21;
      }
    | {
        row: 'K';
        number: 1;
      }
    | {
        row: 'K';
        number: 21;
      }
    | {
        row: 'L';
        number: 1;
      }
    | {
        row: 'L';
        number: 21;
      }
    | {
        row: 'M';
        number: 1;
      }
    | {
        row: 'M';
        number: 21;
      }
    | {
        row: 'N';
        number: 1;
      }
    | {
        row: 'N';
        number: 21;
      }
    | {
        row: 'O';
        number: 1;
      }
    | {
        row: 'O';
        number: 21;
      }
    | {
        row: 'P';
        number: 1;
      }
    | {
        row: 'P';
        number: 21;
      }
    | {
        row: 'Q';
        number: 1;
      }
    | {
        row: 'Q';
        number: 21;
      }
    | {
        row: 'R';
        number: 1;
      }
    | {
        row: 'R';
        number: 23;
      }
    | {
        row: 'S';
        number: 1;
      }
    | {
        row: 'S';
        number: 23;
      }
    | {
        row: 'T';
        number: 1;
      }
    | {
        row: 'T';
        number: 23;
      }
    | {
        row: 'U';
        number: 1;
      }
    | {
        row: 'U';
        number: 23;
      }
    | {
        row: 'V';
        number: 1;
      }
    | {
        row: 'V';
        number: 21;
      }
    | {
        row: 'W';
        number: 1;
      }
    | {
        row: 'W';
        number: 15;
      }
    | {
        row: 'X';
        number: 1;
      }
    | {
        row: 'X';
        number: 15;
      }
    | {
        row: 'Y';
        number: 1;
      }
    | {
        row: 'Y';
        number: 15;
      }
    | {
        row: 'Z';
        number: 1;
      }
    | {
        row: 'Z';
        number: 17;
      },
): number {
  switch (boothNumber.row) {
    case 'I':
      switch (boothNumber.number) {
        case 1:
          return 249;
        case 21:
          return 281;
      }
    case 'J':
      switch (boothNumber.number) {
        case 1:
          return 343;
        case 21:
          return 375;
      }
    case 'K':
      switch (boothNumber.number) {
        case 1:
          return 439;
        case 21:
          return 470;
      }
    case 'L':
      switch (boothNumber.number) {
        case 1:
          return 534;
        case 21:
          return 565;
      }
    case 'M':
      switch (boothNumber.number) {
        case 1:
          return 629;
        case 21:
          return 660;
      }
    case 'N':
      switch (boothNumber.number) {
        case 1:
          return 724;
        case 21:
          return 755;
      }
    case 'O':
      switch (boothNumber.number) {
        case 1:
          return 819;
        case 21:
          return 850;
      }
    case 'P':
      switch (boothNumber.number) {
        case 1:
          return 914;
        case 21:
          return 945;
      }
    case 'Q':
      switch (boothNumber.number) {
        case 1:
          return 1009;
        case 21:
          return 1040;
      }
    case 'R':
      switch (boothNumber.number) {
        case 1:
          return 249;
        case 23:
          return 287;
      }
    case 'S':
      switch (boothNumber.number) {
        case 1:
          return 345;
        case 23:
          return 383;
      }
    case 'T':
      switch (boothNumber.number) {
        case 1:
          return 440;
        case 23:
          return 477;
      }
    case 'U':
      switch (boothNumber.number) {
        case 1:
          return 535;
        case 23:
          return 572;
      }
    case 'V':
      switch (boothNumber.number) {
        case 1:
          return 630;
        case 21:
          return 667;
      }
    case 'W':
      switch (boothNumber.number) {
        case 1:
          return 728;
        case 15:
          return 759;
      }
    case 'X':
      switch (boothNumber.number) {
        case 1:
          return 823;
        case 15:
          return 854;
      }
    case 'Y':
      switch (boothNumber.number) {
        case 1:
          return 918;
        case 15:
          return 948;
      }
    case 'Z':
      switch (boothNumber.number) {
        case 1:
          return 1009;
        case 17:
          return 1046;
      }
  }
}

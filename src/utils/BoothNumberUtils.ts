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
  const J_TO_R_STARTING_X_AXIS = 1269;
  const S_TO_Z_STARTING_X_AXIS = 719;
  const J_TO_R_BOOTH_X_SIZE = 23.25;
  const S_TO_W_BOOTH_X_SIZE = 23.04545454545455;
  const W_TO_Z_BOOTH_X_SIZE = 22.58333333333333;
  const BOOTH_Y_SIZE = 24;

  switch (boothNumber.row) {
    case 'J':
    case 'K':
    case 'L':
    case 'M':
    case 'N':
    case 'O':
    case 'P':
    case 'Q':
    case 'R':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x:
            J_TO_R_STARTING_X_AXIS -
            (boothNumber.number - 1) * J_TO_R_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: J_TO_R_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            J_TO_R_STARTING_X_AXIS -
            (boothNumber.number - 20 - 1) * J_TO_R_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 21 }),
          width: J_TO_R_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'S':
    case 'T':
    case 'U':
    case 'V':
      if (isBetween(boothNumber.number, 1, 22)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * S_TO_W_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: S_TO_W_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 22 - 1) * S_TO_W_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 23 }),
          width: S_TO_W_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'W':
      if (isBetween(boothNumber.number, 1, 20)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * S_TO_W_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: S_TO_W_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 20 - 1) * S_TO_W_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 21 }),
          width: S_TO_W_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }

    case 'X':
    case 'Y':
      if (isBetween(boothNumber.number, 1, 12)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 12 - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 13 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
    case 'Z':
      if (isBetween(boothNumber.number, 1, 12)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 1 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 13, 24)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 12 - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 13 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else if (isBetween(boothNumber.number, 25, 36)) {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 24 - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 25 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      } else {
        return {
          x:
            S_TO_Z_STARTING_X_AXIS -
            (boothNumber.number - 36 - 1) * W_TO_Z_BOOTH_X_SIZE,
          y: getY_Axis({ row: boothNumber.row, number: 37 }),
          width: W_TO_Z_BOOTH_X_SIZE,
          height: BOOTH_Y_SIZE,
        };
      }
  }
}

function getY_Axis(
  boothNumber:
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
        number: 21;
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
        number: 23;
      }
    | {
        row: 'W';
        number: 1;
      }
    | {
        row: 'W';
        number: 21;
      }
    | {
        row: 'X';
        number: 1;
      }
    | {
        row: 'X';
        number: 13;
      }
    | {
        row: 'Y';
        number: 1;
      }
    | {
        row: 'Y';
        number: 13;
      }
    | {
        row: 'Z';
        number: 1;
      }
    | {
        row: 'Z';
        number: 13;
      }
    | {
        row: 'Z';
        number: 25;
      }
    | {
        row: 'Z';
        number: 37;
      },
): number {
  switch (boothNumber.row) {
    case 'J':
      switch (boothNumber.number) {
        case 1:
          return 142;
        case 21:
          return 177;
      }
    case 'K':
      switch (boothNumber.number) {
        case 1:
          return 258;
        case 21:
          return 293;
      }
    case 'L':
      switch (boothNumber.number) {
        case 1:
          return 374;
        case 21:
          return 409;
      }
    case 'M':
      switch (boothNumber.number) {
        case 1:
          return 489;
        case 21:
          return 524;
      }
    case 'N':
      switch (boothNumber.number) {
        case 1:
          return 605;
        case 21:
          return 640;
      }
    case 'O':
      switch (boothNumber.number) {
        case 1:
          return 720;
        case 21:
          return 755;
      }
    case 'P':
      switch (boothNumber.number) {
        case 1:
          return 836;
        case 21:
          return 871;
      }
    case 'Q':
      switch (boothNumber.number) {
        case 1:
          return 952;
        case 21:
          return 987;
      }
    case 'R':
      switch (boothNumber.number) {
        case 1:
          return 1065;
        case 21:
          return 1100;
      }
    case 'S':
      switch (boothNumber.number) {
        case 1:
          return 139;
        case 23:
          return 180;
      }
    case 'T':
      switch (boothNumber.number) {
        case 1:
          return 254;
        case 23:
          return 296;
      }
    case 'U':
      switch (boothNumber.number) {
        case 1:
          return 370;
        case 23:
          return 411;
      }
    case 'V':
      switch (boothNumber.number) {
        case 1:
          return 485;
        case 23:
          return 526;
      }
    case 'W':
      switch (boothNumber.number) {
        case 1:
          return 601;
        case 21:
          return 642;
      }
    case 'X':
      switch (boothNumber.number) {
        case 1:
          return 720;
        case 13:
          return 754;
      }
    case 'Y':
      switch (boothNumber.number) {
        case 1:
          return 831;
        case 13:
          return 865;
      }
    case 'Z':
      switch (boothNumber.number) {
        case 1:
          return 947;
        case 13:
          return 981;
        case 25:
          return 1065;
        case 37:
          return 1099;
      }
  }
}

import { Booth } from '../src/types/Booth';
import { BoothActiveDay } from '../src/types/BoothActiveDay';
import { BoothNumber } from '../src/types/BoothNumber';
import { GroupData } from '../src/types/GroupData';
import { toBoothNumberOrNull } from '../src/utils/BoothNumberUtils';
import csvParser from 'csv-parser';
import * as fs from 'fs';

export async function csvToGroupDataList(
  groupListFilePath: string,
  boothListFilePath: string,
  shouldValidateBoothNumber: boolean,
): Promise<Array<GroupData>> {
  const groupDataListWithoutBoothList: Array<GroupData> =
    await csvToGroupDataListWithoutBoothList(groupListFilePath);

  const groupDataList: Array<GroupData> = await fillGroupDataBoothListByCsv(
    groupDataListWithoutBoothList,
    boothListFilePath,
    shouldValidateBoothNumber,
  );
  return groupDataList;
}

export async function csvToGroupDataListWithoutBoothList(
  groupListFilePath: string,
): Promise<Array<GroupData>> {
  return new Promise((resolve, reject) => {
    const result: GroupData[] = [];

    fs.createReadStream(groupListFilePath)
      .pipe(
        csvParser({
          // FIXME: when using headers property, the header itself will be used in row data
          // headers: ["GROUP_ID", "GROUP_NAME", "GROUP_LINK", "MENU_LINK", "TAG_LIST"],
          separator: ',',
          quote: '"',
        }),
      )
      .on('data', (row) => {
        result.push({
          groupId: anyToTrimmedString(row.GROUP_ID),
          groupName: anyToTrimmedString(row.GROUP_NAME),
          groupLink: anyToTrimmedStringOrNull(row.GROUP_LINK),
          menuLink: anyToTrimmedStringOrNull(row.MENU_LINK),
          boothList: [],
          tagList: convertToTagList(row.TAG_LIST),
        } satisfies GroupData);
      })
      .on('end', () => {
        resolve(result); // Resolve with the array of GroupData
      })
      .on('error', (err) => {
        reject(err); // Reject on error
      });
  });
}

function fillGroupDataBoothListByCsv(
  groupDataListWithoutBoothList: Array<GroupData>,
  boothListFilePath: string,
  shouldValidateBoothNumber: boolean,
): Promise<Array<GroupData>> {
  return new Promise((resolve, reject) => {
    let result: GroupData[] = groupDataListWithoutBoothList;

    fs.createReadStream(boothListFilePath)
      .pipe(
        csvParser({
          // headers: ["BOOTH_ACTIVE_DAY", "BOOTH_LIST", "GROUP_NAME"],
          separator: ',',
          quote: '"',
        }),
      )
      .on('data', (row) => {
        result = addBoothToGroupDataByGroupId(
          result,
          anyToTrimmedString(row.GROUP_NAME),
          convertToBooth(
            row.BOOTH_ACTIVE_DAY,
            row.BOOTH_LIST,
            shouldValidateBoothNumber,
          ),
        );
      })
      .on('end', () => {
        resolve(result); // Resolve with the array of GroupData
      })
      .on('error', (err) => {
        reject(err); // Reject on error
      });
  });
}

function convertToBooth(
  boothActiveDayStr: string,
  boothListStr: string,
  shouldValidateBoothNumber: boolean,
): Booth {
  return {
    activeDay: convertToBoothActiveDay(boothActiveDayStr),
    boothNumberList: convertToBoothNumberList(
      boothListStr,
      shouldValidateBoothNumber,
    ),
  };
}

function convertToTagList(tagListStr: string): Array<string> {
  const tagList = tagListStr
    .trim()
    .split(',')
    .map((e) => e.trim());

  if (tagList.every((e) => e === '')) {
    return [];
  } else {
    return tagList;
  }
}

// NOTE: The implementation should be changed with each event
function convertToBoothActiveDay(boothActiveDayStr: string): BoothActiveDay {
  switch (boothActiveDayStr) {
    case '1':
      return 'CWT72_DAY_1';
    case '2':
      return 'CWT72_DAY_2';
    default:
      throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
  }
}

function convertToBoothNumberList(
  boothListStr: string,
  shouldValidateBoothNumber: boolean,
): Array<BoothNumber> {
  if (shouldValidateBoothNumber === true) {
    return boothListStr.split(',').map((rawBoothNumber: string) => {
      const trimmedRawBoothNumber = rawBoothNumber.trim();

      const boothNumberOrNull: BoothNumber | null = toBoothNumberOrNull(
        trimmedRawBoothNumber,
      );

      if (boothNumberOrNull == null) {
        throw Error(`Invalid rawBoothNumber [${rawBoothNumber}].`);
      }

      return boothNumberOrNull;
    });
  } else {
    return boothListStr.split(',').map((rawBoothNumber: string) => {
      return { row: rawBoothNumber, number: 1 } as BoothNumber;
    });
  }
}

function addBoothToGroupDataByGroupId(
  groupData: Array<GroupData>,
  groupName: string,
  newBooth: Booth,
): Array<GroupData> {
  const newGroupData = groupData.map(
    (group) =>
      group.groupName === groupName
        ? {
            ...group,
            boothList: group.boothList.concat(newBooth), // Add new Booth with existing GroupData
          }
        : group, // Keep the other groups unchanged
  );

  return newGroupData;
}

function anyToTrimmedString(input: any): string {
  return input.toString().trim();
}

function anyToTrimmedStringOrNull(input: any): string | null {
  if (input) {
    return input.toString().trim();
  } else {
    return null;
  }
}

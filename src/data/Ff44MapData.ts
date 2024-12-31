import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothData, BoothDataOnMap } from "../types/BoothData";
import { GroupData } from "../types/GroupData";
import { boothNumberListToTargetingBoxDimension } from "../utils/BoothNumberUtils";
import { defined } from "../utils/TypeUtils";

const Ff44GroupData: Array<GroupData> = [
  {
    groupId: "32014cff102c4d70a654d6b02d3e7276",
    groupName: "台北人",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "S", number: 3 },
          { row: "S", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "S", number: 33 }],
      },
    ],
  },
  {
    groupId: "c8c7be762d444bb8b8f3b14bedda760a",
    groupName: "壞菇社",
    groupLink: "https://www.facebook.com/MARK4why",
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "T", number: 25 },
          { row: "T", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "T", number: 25 },
          { row: "T", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "T", number: 25 },
          { row: "T", number: 26 },
        ],
      },
    ],
  },
];

function getFf44BoothDataByActiveDay(
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return Ff44GroupData.filter((groupData) =>
    groupData.boothList.some((booth) => booth.activeDay === boothActiveDay),
  ).map((groupData) => {
    return {
      groupId: groupData.groupId,
      groupName: groupData.groupName,
      groupLink: groupData.groupLink,
      booth: defined(
        groupData.boothList.find((booth) => booth.activeDay === boothActiveDay),
      ),
    };
  });
}

export function getFf44BoothDataOnMapByActiveDay(
  boothActiveDay: BoothActiveDay,
): Array<BoothDataOnMap> {
  return getFf44BoothDataByActiveDay(boothActiveDay).map((boothData) => {
    return {
      ...boothData,
      dimension: boothNumberListToTargetingBoxDimension(
        boothData.booth.boothNumberList,
      ),
    };
  });
}

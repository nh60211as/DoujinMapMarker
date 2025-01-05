import { assert, describe, test } from "vitest";
import rawFf44GroupData from "../generated-data/FF44/group-data.json";
import { BoothNumber } from "../src/types/BoothNumber";
import { BoothActiveDay } from "../src/types/BoothActiveDay";
import { GroupDataArraySchema } from "./GroupDataSchema";
import { GroupData } from "../src/types/GroupData";

const VALIDATED_FF44_GROUP_DATA_LIST: Array<GroupData> =
  getValidGroupDataList(rawFf44GroupData);

function getValidGroupDataList(input: any): Array<GroupData> {
  const { error: invalidError, value: validGroupDataList } =
    GroupDataArraySchema.validate(input);
  if (invalidError) {
    throw new Error(`Failed to validate group data ${invalidError.cause}`);
  } else {
    return validGroupDataList;
  }
}

describe("Validate FF 44 Group Data", () => {
  test("No Duplicate Group ID", () => {
    const groupIdList = new Set<string>();

    for (const groupData of VALIDATED_FF44_GROUP_DATA_LIST) {
      if (groupIdList.has(groupData.groupId)) {
        assert.fail(`Duplicate group ID [${groupData.groupId}]`);
      }
      groupIdList.add(groupData.groupId);
    }
  });
  test("No Duplicate Group Name", () => {
    const groupNameList = new Set<string>();

    for (const groupData of VALIDATED_FF44_GROUP_DATA_LIST) {
      if (groupNameList.has(groupData.groupName)) {
        assert.fail(`Duplicate group name [${groupData.groupName}]`);
      }
      groupNameList.add(groupData.groupName);
    }
  });
  test("No Duplicate Booth Number Of The Same Day", () => {
    type BoothNumberOfTheDay = {
      activeDay: string; // should be BoothActiveDay
      boothNumber: BoothNumber;
    };

    const boothNumberOfTheDayStrList = new Set<string>();

    for (const groupData of VALIDATED_FF44_GROUP_DATA_LIST) {
      for (const booth of groupData.boothList) {
        for (const boothNumber of booth.boothNumberList) {
          const boothNumberOfTheDay: BoothNumberOfTheDay = {
            activeDay: BoothActiveDay[booth.activeDay],
            boothNumber: boothNumber,
          };
          const boothNumberOfTheDayStr = JSON.stringify(boothNumberOfTheDay);

          if (boothNumberOfTheDayStrList.has(boothNumberOfTheDayStr)) {
            assert.fail(
              `Duplicate booth number of the day [${boothNumberOfTheDayStr}]`,
            );
          }
          boothNumberOfTheDayStrList.add(boothNumberOfTheDayStr);
        }
      }
    }
  });
});

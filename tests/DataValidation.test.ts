import { assert, describe, test } from "vitest";
import { FF44_GROUP_DATA } from "../src/data/Ff44GroupData";
import { BoothNumber } from "../src/types/BoothNumber";
import { BoothActiveDay } from "../src/types/BoothActiveDay";

describe("Validate FF 44 Group Data", () => {
  test("No Duplicate Group ID", () => {
    const groupIdList = new Set<string>();

    for (const groupData of FF44_GROUP_DATA) {
      if (groupIdList.has(groupData.groupId)) {
        assert.fail(`Duplicate group ID [${groupData.groupId}]`);
      }
      groupIdList.add(groupData.groupId);
    }
  });
  test("No Duplicate Group Name", () => {
    const groupNameList = new Set<string>();

    for (const groupData of FF44_GROUP_DATA) {
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

    for (const groupData of FF44_GROUP_DATA) {
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

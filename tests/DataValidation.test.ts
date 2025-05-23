import { TAG_LIST } from '../data/TagList';
import { EVENT_CONFIG } from '../src/config/EventConfig';
import { BoothNumber } from '../src/types/BoothNumber';
import { GroupData } from '../src/types/GroupData';
import { GroupDataArraySchema } from './GroupDataSchema';
import { assert, describe, test } from 'vitest';

const VALIDATED_GROUP_DATA_LIST: Array<GroupData> = getValidGroupDataList(
  EVENT_CONFIG.general.RAW_GROUP_DATA,
);

function getValidGroupDataList(input: any): Array<GroupData> {
  const { error: invalidError, value: validGroupDataList } =
    GroupDataArraySchema.validate(input);
  if (invalidError) {
    console.error(invalidError);
    throw new Error(`Failed to validate group data ${invalidError.cause}`);
  } else {
    return validGroupDataList;
  }
}

describe('Validate FF 44 Group Data', () => {
  test('No Duplicate Group ID', () => {
    const groupIdList = new Set<string>();

    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      if (groupIdList.has(groupData.groupId)) {
        assert.fail(`Duplicate group ID [${groupData.groupId}]`);
      }
      groupIdList.add(groupData.groupId);
    }
  });
  test('Group ID length is 32', () => {
    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      if (groupData.groupId.length !== 32) {
        assert.fail(`Group ID [${groupData.groupId}] length is not 32.`);
      }
    }
  });
  test('No Duplicate Group Name', () => {
    const groupNameList = new Set<string>();

    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      if (groupNameList.has(groupData.groupName)) {
        assert.fail(`Duplicate group name [${groupData.groupName}]`);
      }
      groupNameList.add(groupData.groupName);
    }
  });
  test('No Duplicate Booth Number Of The Same Day', () => {
    type BoothNumberOfTheDay = {
      activeDay: string; // should be BoothActiveDay
      boothNumber: BoothNumber;
    };

    const boothNumberOfTheDayStrList = new Set<string>();

    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      for (const booth of groupData.boothList) {
        for (const boothNumber of booth.boothNumberList) {
          const boothNumberOfTheDay: BoothNumberOfTheDay = {
            activeDay: booth.activeDay,
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
  test('Group has no empty booth list', () => {
    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      if (groupData.boothList.length === 0) {
        assert.fail(`Group [${groupData.groupName}] booth list is empty.`);
      }
    }
  });

  test('Group booth list has no empty booth number list', () => {
    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      for (const booth of groupData.boothList) {
        if (booth.boothNumberList.length === 0) {
          assert.fail(
            `Group [${groupData.groupName}] booth list booth number list is empty.`,
          );
        }
      }
    }
  });

  test('Group tag list has no invalid tag', () => {
    for (const groupData of VALIDATED_GROUP_DATA_LIST) {
      for (const tag of groupData.tagList) {
        if (TAG_LIST.includes(tag) === false) {
          assert.fail(
            `Group [${groupData.groupName}] tag [${tag}] does not exist in TAG_LIST.`,
          );
        }
      }
    }
  });
});

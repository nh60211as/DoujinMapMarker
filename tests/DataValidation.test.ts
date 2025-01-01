import { assert, describe, expect, test } from "vitest";
import { FF44_GROUP_DATA } from "../src/data/Ff44MapData";

describe("Validate FF 44 Map Data", () => {
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
});

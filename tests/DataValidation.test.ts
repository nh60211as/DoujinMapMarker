import { assert, describe, expect, test } from "vitest";
import { FF44_GROUP_DATA } from "../src/data/Ff44MapData";

describe("Validate FF 44 Map Data", () => {
  test("No Duplicate Group ID", () => {
    const groupIds = new Set<string>()

    for (const groupData of FF44_GROUP_DATA) {
        if (groupIds.has(groupData.groupId)) {
          assert.fail(`Duplicate group ID [${groupData.groupId}]`)
        }
        groupIds.add(groupData.groupId);
      }
  });
});

import * as fs from "fs";
import * as csv from "csv-parser";
import { GroupData } from "../src/types/GroupData";

export function csvToGroupDataList(
  groupListFilePath: string,
  boothListFilePath: string,
): Array<GroupData> {
  const groupDataListWithoutBoothList: Array<GroupData> =
    csvToGroupDataListWithoutBoothList(groupListFilePath);

  const groupDataList: Array<GroupData> = fillGroupDataBoothListByCsv(
    groupDataListWithoutBoothList,
    boothListFilePath,
  );
  return groupDataList;
}

function csvToGroupDataListWithoutBoothList(
  groupListFilePath: string,
): Array<GroupData> {
  const result: GroupData[] = [];

  fs.createReadStream(groupListFilePath)
    .pipe(csv({ separator: "," }))
    .on("data", (row) => {
      result.push({
        groupId: row.GROUP_ID,
        groupName: row.GROUP_NAME,
        groupLink: row.GROUP_LINK || null,
        boothList: [],
      });
    });

  return result;
}

function fillGroupDataBoothListByCsv(
  groupDataListWithoutBoothList: Array<GroupData>,
  boothListFilePath: string,
): Array<GroupData> {
  return [];
}

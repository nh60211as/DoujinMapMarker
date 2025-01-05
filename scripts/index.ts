import { GroupData } from "../src/types/GroupData";
import { csvToGroupDataList } from "./script";

const result: Array<GroupData> = csvToGroupDataList(
  "./data/FF44/group-list.csv",
  "./data/FF44/booth-list.csv",
);
console.log(result);

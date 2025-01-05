import { GroupData } from "../src/types/GroupData";
import { csvToGroupDataList } from "./script";

csvToGroupDataList("./data/FF44/group-list.csv", "./data/FF44/booth-list.csv")
  .then((groupDataList: Array<GroupData>) => {
    console.log("groupDataList", groupDataList);
  })
  .catch((e) => console.error(e));

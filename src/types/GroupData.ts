import { Booth } from "./Booth";

export type GroupData = {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  boothList: Array<Booth>;
};

import { Booth } from './Booth';

export type GroupData = {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  menuLink: string | null;
  boothList: Array<Booth>;
  tagList: Array<string>;
};

export const DEFAULT_GROUP_DATA: GroupData = {
  groupId: '',
  groupName: '',
  groupLink: null,
  menuLink: null,
  boothList: [],
  tagList: [],
};

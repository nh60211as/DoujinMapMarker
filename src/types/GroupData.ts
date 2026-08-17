import { Booth } from './Booth';

export type GroupData = {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  menuLinks: Array<string>;
  boothList: Array<Booth>;
  tagList: Array<string>;
};

export const DEFAULT_GROUP_DATA: GroupData = {
  groupId: '',
  groupName: '',
  groupLink: null,
  menuLinks: [],
  boothList: [],
  tagList: [],
};

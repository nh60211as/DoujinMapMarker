import { GroupData } from '../src/types/GroupData';

export interface GroupDataWithSanitizationResult {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  menuLink: string | null;
  sanitizedGroupLink: string | null;
  sanitizedMenuLink: string | null;
}

export async function getUnsanitizedGroupDataList(
  groupDataList: Array<GroupData>,
): Promise<Array<GroupDataWithSanitizationResult>> {
  return [];
}

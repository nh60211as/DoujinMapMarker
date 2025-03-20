// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/PF42/group-data.json';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { BoothData, BoothDataOnMap } from '../types/BoothData';
import { GroupData } from '../types/GroupData';
import { boothNumberListToTargetingBoxDimension } from '../utils/BoothNumberUtils';
import { defined } from '../utils/TypeUtils';

// The data should be validated in test (DO NOT use `as Array<GroupData>` in any other places)
export const CURRENT_GROUP_DATA: Array<GroupData> =
  rawGroupData as Array<GroupData>;

function getFullTagList(): Array<string> {
  const set: Set<string> = CURRENT_GROUP_DATA.reduce(
    (accumulator, value) => new Set([...accumulator, ...value.tagList]),
    new Set<string>(),
  );

  return Array.from(set).sort();
}

export const CURRENT_TAG_LIST: Array<string> = getFullTagList();

function getBoothDataListByActiveDay(
  groupDataList: Array<GroupData>,
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return groupDataList
    .filter((groupData) =>
      groupData.boothList.some((booth) => booth.activeDay === boothActiveDay),
    )
    .map((groupData) => {
      return {
        groupId: groupData.groupId,
        groupName: groupData.groupName,
        groupLink: groupData.groupLink,
        booth: defined(
          groupData.boothList.find(
            (booth) => booth.activeDay === boothActiveDay,
          ),
        ),
      };
    });
}

function getBoothDataList(
  groupDataList: Array<GroupData>,
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return getBoothDataListByActiveDay(groupDataList, boothActiveDay);
}

export function getBoothDataListOnMap(
  groupDataList: Array<GroupData>,
  boothActiveDay: BoothActiveDay,
): Array<BoothDataOnMap> {
  return getBoothDataList(groupDataList, boothActiveDay).map((boothData) => {
    return {
      ...boothData,
      dimension: boothNumberListToTargetingBoxDimension(
        boothData.booth.boothNumberList,
      ),
    };
  });
}

export function getGroupDataByGroupId(groupId: string): GroupData {
  return defined(CURRENT_GROUP_DATA.find((e) => e.groupId === groupId));
}

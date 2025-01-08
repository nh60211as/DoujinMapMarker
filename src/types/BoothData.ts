import { Booth } from './Booth';
import { BoothActiveDay } from './BoothActiveDay';
import { TargetingBoxDimension } from './TargetingBoxDimension';

export type BoothData = {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  booth: Booth;
};

export interface BoothDataOnMap extends BoothData {
  dimension: TargetingBoxDimension;
}

export const DEFAULT_BOOTH_DATA_ON_MAP: BoothDataOnMap = {
  groupId: '',
  groupName: '',
  groupLink: null,
  booth: {
    activeDay: BoothActiveDay.day1,
    boothNumberList: [],
  },
  dimension: { x: 0, y: 0, width: 0, height: 0 },
};

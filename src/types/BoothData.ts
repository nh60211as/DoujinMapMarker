import { Booth } from './Booth';
import { DEFAULT_BOOTH_ACTIVE_DAY } from './BoothActiveDay';
import { TargetingBoxDimension } from './TargetingBoxDimension';

export type BoothData = {
  groupId: string;
  groupName: string;
  booth: Booth;
};

export interface BoothDataOnMap extends BoothData {
  dimension: TargetingBoxDimension;
}

export const DEFAULT_BOOTH_DATA_ON_MAP: BoothDataOnMap = {
  groupId: '',
  groupName: '',
  booth: {
    activeDay: DEFAULT_BOOTH_ACTIVE_DAY,
    boothNumberList: [],
  },
  dimension: { x: 0, y: 0, width: 0, height: 0 },
};

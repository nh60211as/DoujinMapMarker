import { TargetingBoxDimension } from "./TargetingBoxDimension";

export enum BoothActiveDay {
  day1,
  day2,
  day3,
}

export type MapData = {
  id: string;
  dimension: TargetingBoxDimension;
  boothName: string;
  boothNumbers: Array<string>;
  boothActiveDays: Array<BoothActiveDay>;
  boothLink: string | undefined;
};

export const DEFAULT_MAP_DATA: MapData = {
  id: "",
  dimension: { x: 0, y: 0, width: 0, height: 0 },
  boothName: "",
  boothNumbers: [],
  boothActiveDays: [],
  boothLink: undefined,
};

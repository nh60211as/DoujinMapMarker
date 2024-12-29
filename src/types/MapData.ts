import { TargetingBoxDimension } from "./TargetingBoxDimension";

export type MapData = {
  id: string;
  dimension: TargetingBoxDimension;
  boothNumbers: Array<string>;
  boothName: string;
  boothLink: string | undefined;
};

export const DEFAULT_MAP_DATA = {
  id: "",
  dimension: { x: 0, y: 0, width: 0, height: 0 },
  boothNumbers: [],
  boothName: "",
  boothLink: undefined,
};

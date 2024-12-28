import { TargetingBoxDimension } from "./TargetingBoxDimension";

export type MapData = {
  id: string;
  dimension: TargetingBoxDimension;
  boothNumbers: Array<string>;
  boothName: string;
  boothLink: string | undefined;
};

export type TargetingBoxDimension = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface TargetingBoxDimensionWithGroupId extends TargetingBoxDimension {
  groupId: string;
}

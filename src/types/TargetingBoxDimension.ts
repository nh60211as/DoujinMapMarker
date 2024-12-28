export type TargetingBoxDimension = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface TargetingBoxDimensionWithId extends TargetingBoxDimension {
  id: string;
}

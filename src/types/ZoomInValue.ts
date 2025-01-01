export const zoomInValueList: Array<number> = [0.125, 0.25, 0.5, 0.75, 1, 2, 4];
export type ValidZoomInValue = (typeof zoomInValueList)[number];

export const DEFAULT_ZOOM_IN_VALUE: ValidZoomInValue = 0.75;
export const DEFAULT_ZOOM_IN_VALUE_INDEX: number = zoomInValueList.findIndex(
  (e) => e === DEFAULT_ZOOM_IN_VALUE,
);

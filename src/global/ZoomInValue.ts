import { DEFAULT_ZOOM_IN_VALUE, ValidZoomInValue, zoomInValueList } from '../types/ZoomInValue';
import createStore from 'react-superstore';
import * as browserSettingService from '../services/BrowserSettingService';

// FIXME: the implementation is duplicated from getZoomInIndexOrDefault() in Header.tsx
export const [useZoomInValue, setZoomInValue, getZoomInValue] =
  createStore<ValidZoomInValue>(browserSettingService.getZoomInOrDefault(zoomInValueList, DEFAULT_ZOOM_IN_VALUE));

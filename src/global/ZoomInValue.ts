import * as browserSettingService from '../services/BrowserSettingService';
import {
  DEFAULT_ZOOM_IN_VALUE,
  ValidZoomInValue,
  zoomInValueList,
} from '../types/ZoomInValue';
import createStore from 'react-superstore';

// FIXME: the implementation is duplicated from getZoomInIndexOrDefault() in Header.tsx
export const [useZoomInValue, setZoomInValue, getZoomInValue] =
  createStore<ValidZoomInValue>(
    browserSettingService.getZoomInOrDefault(
      zoomInValueList,
      DEFAULT_ZOOM_IN_VALUE,
    ),
  );

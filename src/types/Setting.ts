import { BoothActiveDay } from './BoothActiveDay';

export type Setting = {
  version: '1';
  mapMarker: Array<SettingMapMarker>;
};

export type SettingMapMarker = {
  id: string;
  activeDay: BoothActiveDay;
  marker: string; // should be Marker
};

import { BoothActiveDay } from './BoothActiveDay';
import { EventType } from './EventType';

export type Setting = {
  eventType: EventType;
  version: '1';
  mapMarker: Array<SettingMapMarker>;
};

export type SettingMapMarker = {
  id: string;
  activeDay: BoothActiveDay;
  marker: string; // should be Marker
};

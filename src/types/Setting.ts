export type Setting = {
  eventType: string; // should be EventType
  version: '1';
  mapMarker: Array<SettingMapMarker>;
};

export type SettingMapMarker = {
  id: string;
  activeDay: string; // should be BoothActiveDay
  marker: string; // should be Marker
};

import {
  BoothActiveDay,
  DEFAULT_BOOTH_ACTIVE_DAY,
} from '../types/BoothActiveDay';
import { Marker } from '../types/Marker';
import { SettingMapMarker } from '../types/Setting';
import { parseActiveDayOrNull } from '../utils/BoothActiveDayUtils';
import { parseMarker } from '../utils/MarkerUtils';

// TODO: this will clear everything in localStorage.
export function clear() {
  localStorage.clear();
}

export function setMarker(
  activeDay: BoothActiveDay,
  groupId: string,
  marker: Marker,
) {
  const localStorageKey = createMapMarkerKey(activeDay, groupId);

  switch (marker) {
    case Marker.plannedToGo:
    case Marker.alreadyGone:
      localStorage.setItem(localStorageKey, Marker[marker]);
      break;
    case Marker.none:
      localStorage.removeItem(localStorageKey);
      break;
  }
}

export function getMarker(activeDay: BoothActiveDay, groupId: string): Marker {
  const localStorageKey = createMapMarkerKey(activeDay, groupId);

  const rawMarker: string | null = localStorage.getItem(localStorageKey);

  return parseMarker(rawMarker);
}

export function isGroupIdMarked(
  activeDay: BoothActiveDay,
  groupId: string,
): boolean {
  const marker = getMarker(activeDay, groupId);

  switch (marker) {
    case Marker.plannedToGo:
    case Marker.alreadyGone:
      return true;
    case Marker.none:
      return false;
  }
}

export function getSettingMapMarkerList(): Array<SettingMapMarker> {
  let settingMapMarkerList: Array<SettingMapMarker> = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key: string | null = localStorage.key(i);
    if (key === null) {
      continue;
    }

    // key format: <boothActiveDay>.map.marker.<id>
    const tokens: Array<string> = key.split('.');
    if (tokens.length === 4 && tokens[1] === 'map' && tokens[2] === 'marker') {
      const activeDay: BoothActiveDay | null = parseActiveDayOrNull(tokens[0]);
      if (activeDay === null) {
        continue;
      }

      const id = tokens[3];
      settingMapMarkerList.push({
        id: id,
        activeDay: activeDay,
        marker: Marker[getMarker(activeDay, id)],
      });
    }
  }

  return settingMapMarkerList;
}

export function setActiveDay(activeDay: BoothActiveDay) {
  const localStorageKey = createMapActiveDayKey();

  localStorage.setItem(localStorageKey, activeDay);
}

export function getActiveDayOrNull(): BoothActiveDay | null {
  const localStorageKey = createMapActiveDayKey();

  const rawActiveDay: string | null = localStorage.getItem(localStorageKey);
  return parseActiveDayOrNull(rawActiveDay);
}

export function getActiveDayOrDefault(): BoothActiveDay {
  const localStorageKey = createMapActiveDayKey();

  const rawActiveDay: string | null = localStorage.getItem(localStorageKey);

  const parsedActiveDay: BoothActiveDay | null =
    parseActiveDayOrNull(rawActiveDay);

  if (parsedActiveDay === null) {
    return DEFAULT_BOOTH_ACTIVE_DAY;
  }

  return parsedActiveDay;
}

function createMapMarkerKey(
  activeDay: BoothActiveDay,
  groupId: string,
): string {
  return `${activeDay}.map.marker.${groupId}`;
}

function createMapActiveDayKey(): string {
  return `map.activeDay`;
}

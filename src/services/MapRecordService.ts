import { BoothActiveDay } from '../types/BoothActiveDay';
import { EventType } from '../types/EventType';
import { Marker } from '../types/Marker';
import { SettingMapMarker } from '../types/Setting';
import { parseActiveDayOrNull } from '../utils/BoothActiveDayUtils';
import { parseMarker } from '../utils/MarkerUtils';

// TODO: this will clear everything in localStorage.
export function clear() {
  localStorage.clear();
}

export function setMarker(
  eventType: EventType,
  activeDay: BoothActiveDay,
  groupId: string,
  marker: Marker,
) {
  const localStorageKey = createMapMarkerKey(eventType, activeDay, groupId);

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

export function getMarker(
  eventType: EventType,
  activeDay: BoothActiveDay,
  groupId: string,
): Marker {
  const localStorageKey = createMapMarkerKey(eventType, activeDay, groupId);

  const rawMarker: string | null = localStorage.getItem(localStorageKey);

  return parseMarker(rawMarker);
}

export function isGroupIdMarked(
  eventType: EventType,
  activeDay: BoothActiveDay,
  groupId: string,
): boolean {
  const marker = getMarker(eventType, activeDay, groupId);

  switch (marker) {
    case Marker.plannedToGo:
    case Marker.alreadyGone:
      return true;
    case Marker.none:
      return false;
  }
}

export function getSettingMapMarkerList(
  eventType: EventType,
): Array<SettingMapMarker> {
  let settingMapMarkerList: Array<SettingMapMarker> = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key: string | null = localStorage.key(i);
    if (key === null) {
      continue;
    }

    // key format: <eventType>.<boothActiveDay>.map.marker.<id>
    const tokens: Array<string> = key.split('.');
    if (
      tokens.length === 5 &&
      tokens[0] === EventType[eventType] &&
      tokens[2] === 'map' &&
      tokens[3] === 'marker'
    ) {
      const activeDay: BoothActiveDay | null = parseActiveDayOrNull(tokens[1]);
      if (activeDay === null) {
        continue;
      }

      const id = tokens[4];
      settingMapMarkerList.push({
        id: id,
        activeDay: BoothActiveDay[activeDay],
        marker: Marker[getMarker(eventType, activeDay, id)],
      });
    }
  }

  return settingMapMarkerList;
}

export function setActiveDay(eventType: EventType, activeDay: BoothActiveDay) {
  const localStorageKey = createMapActiveDayKeyByEventType(eventType);

  localStorage.setItem(localStorageKey, BoothActiveDay[activeDay]);
}

export function getActiveDayOrNull(
  eventType: EventType,
): BoothActiveDay | null {
  const localStorageKey = createMapActiveDayKeyByEventType(eventType);

  const rawActiveDay: string | null = localStorage.getItem(localStorageKey);
  return parseActiveDayOrNull(rawActiveDay);
}

export function getActiveDayOrDefault(
  eventType: EventType,
  defaultValue: BoothActiveDay,
): BoothActiveDay {
  const localStorageKey = createMapActiveDayKeyByEventType(eventType);

  const rawActiveDay: string | null = localStorage.getItem(localStorageKey);

  const parsedActiveDay: BoothActiveDay | null =
    parseActiveDayOrNull(rawActiveDay);

  if (parsedActiveDay === null) {
    return defaultValue;
  }

  parseActiveDayOrNull(rawActiveDay);

  return parsedActiveDay;
}

function createMapMarkerKey(
  eventType: EventType,
  activeDay: BoothActiveDay,
  groupId: string,
): string {
  return `${EventType[eventType]}.${BoothActiveDay[activeDay]}.map.marker.${groupId}`;
}

function createMapActiveDayKeyByEventType(eventType: EventType): string {
  return `${EventType[eventType]}.map.activeDay`;
}

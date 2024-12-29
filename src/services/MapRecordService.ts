import { EventType } from "../types/EventType";
import { Marker } from "../types/Marker";

export function setMarkerByEventTypeAndId(
  eventType: EventType,
  id: string,
  marker: Marker,
) {
  const localStorageKey = createMapMarkerKeyByEventTypeAndId(eventType, id);

  localStorage.setItem(localStorageKey, Marker[marker]);
}

export function getMarkerByEventTypeAndId(
  eventType: EventType,
  id: string,
): Marker {
  const localStorageKey = createMapMarkerKeyByEventTypeAndId(eventType, id);

  const rawMarker: string | null = localStorage.getItem(localStorageKey);

  return parseMarkerOrNull(rawMarker);
}

export function getIdToMarkerMapByEventType(
  eventType: EventType,
): Map<string, Marker> {
  let map: Map<string, Marker> = new Map();

  for (let i = 0; i < localStorage.length; i++) {
    const key: string | null = localStorage.key(i);
    if (key === null) {
      continue;
    }

    // key format: map.marker.<id>
    const tokens: Array<string> = key.split(".");
    if (
      tokens.length === 4 &&
      tokens[0] === EventType[eventType] &&
      tokens[1] === "map" &&
      tokens[2] === "marker"
    ) {
      const id = tokens[3];
      map.set(id, getMarkerByEventTypeAndId(eventType, id));
    }
  }

  return map;
}

function createMapMarkerKeyByEventTypeAndId(
  eventType: EventType,
  id: string,
): string {
  return `${EventType[eventType]}.map.marker.${id}`;
}

function parseMarkerOrNull(rawMarker: string | null): Marker {
  switch (rawMarker) {
    case Marker[Marker.plannedToGo]:
      return Marker.plannedToGo;
    case Marker[Marker.alreadyGone]:
      return Marker.alreadyGone;
    default:
      return Marker.none;
  }
}

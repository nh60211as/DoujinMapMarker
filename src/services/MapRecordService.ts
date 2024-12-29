import { Marker } from "../types/Marker";

export function setMarkerById(id: string, marker: Marker) {
  const localStorageKey = createMapMarkerKeyById(id);

  localStorage.setItem(localStorageKey, Marker[marker]);
}

export function getMarkerById(id: string): Marker {
  const localStorageKey = createMapMarkerKeyById(id);

  const rawMarker: string | null = localStorage.getItem(localStorageKey);

  return parseMarkerOrNull(rawMarker);
}

export function getIdToMarkerMap(): Map<string, Marker> {
  let map: Map<string, Marker> = new Map();

  for (let i = 0; i < localStorage.length; i++) {
    const key: string | null = localStorage.key(i);
    if (key === null) {
      continue;
    }

    // key format: map.marker.<id>
    const tokens: Array<string> = key.split(".");
    if (tokens.length === 3 && tokens[0] === "map" && tokens[1] === "marker") {
      const id = tokens[2];
      map.set(id, getMarkerById(id));
    }
  }

  return map;
}

function createMapMarkerKeyById(id: string): string {
  return `map.marker.${id}`;
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

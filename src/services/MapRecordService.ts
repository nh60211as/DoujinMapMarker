import { Marker } from "../types/Marker";

export function setMarkerById(id: string, marker: Marker) {
  const localStorageKey = createMapMarkerKeyById(id);

  localStorage.setItem(localStorageKey, marker.toString());
}

export function getMarkerById(id: string): Marker {
  const localStorageKey = createMapMarkerKeyById(id);

  const rawMarker: string | null = localStorage.getItem(localStorageKey);

  return parseMarkerOrNull(rawMarker);
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

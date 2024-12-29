import { Marker } from "../types/Marker";

export function parseMarker(rawMarker: string | null): Marker {
  switch (rawMarker) {
    case Marker[Marker.plannedToGo]:
      return Marker.plannedToGo;
    case Marker[Marker.alreadyGone]:
      return Marker.alreadyGone;
    default:
      return Marker.none;
  }
}

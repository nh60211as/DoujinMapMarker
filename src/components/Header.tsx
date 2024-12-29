import { JSX } from "preact";
import { Marker } from "../types/Marker";
import * as mapRecordService from "../services/MapRecordService";
import { getIsoDateStringForFilename } from "../utils/DateTimeUtils";
import { EventType } from "../types/EventType";
import { Setting } from "../types/Setting";

export function Header(): JSX.Element {
  return (
    <header>
      <button onClick={exportSetting}>匯出設定</button>
      <button>匯入設定</button>
    </header>
  );
}

function exportSetting() {
  const settingMap: Map<string, Marker> = mapRecordService.getIdToMarkerMap();

  const setting: Setting = {
    eventType: EventType[EventType.FF44],
    version: "1",
    mapMarker: Array.from(settingMap).map(([id, marker]) => ({
      id: id,
      marker: Marker[marker],
    })),
  };

  const payload: string = JSON.stringify(setting);

  const blob = new Blob([payload], { type: "application/json" });

  const url: string = URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = url;
  link.download = `FF44-setting-${getIsoDateStringForFilename()}.json`;

  // Programmatically trigger a click event on the link to initiate the download
  link.click();

  // Clean up by revoking the object URL after the download is initiated
  URL.revokeObjectURL(url);
}

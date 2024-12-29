import { JSX } from "preact";
import { Marker } from "../types/Marker";
import * as mapRecordService from "../services/MapRecordService";
import { getIsoDateStringForFilename } from "../utils/DateTimeUtils";
import { CURRENT_EVENT_TYPE, EventType } from "../types/EventType";
import { Setting, SettingMapMarker } from "../types/Setting";
import { FileReaderComponent } from "./FileReaderComponent";
import { parseMarkerOrNull } from "../utils/MarkerUtils";

export function Header(): JSX.Element {
  return (
    <header>
      <button onClick={exportSetting}>匯出設定</button>
      <span>匯入設定：</span>
      <FileReaderComponent onFileContentChange={importSetting} />
    </header>
  );
}

function exportSetting() {
  const settingMap: Map<string, Marker> =
    mapRecordService.getIdToMarkerMapByEventType(EventType.FF44);

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

function importSetting(fileContent: string | null) {
  if (fileContent === null) {
    return;
  }

  const setting: Setting = JSON.parse(fileContent);

  setting.mapMarker.forEach((settingMapMarker: SettingMapMarker) => {
    mapRecordService.setMarkerByEventTypeAndId(
      CURRENT_EVENT_TYPE,
      settingMapMarker.id,
      parseMarkerOrNull(settingMapMarker.marker),
    );
  });
}

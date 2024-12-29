import { JSX } from "preact";
import * as mapRecordService from "../services/MapRecordService";
import { getIsoDateStringForFilename } from "../utils/DateTimeUtils";
import { CURRENT_EVENT_TYPE, EventType } from "../types/EventType";
import { Setting, SettingMapMarker } from "../types/Setting";
import { FileReaderComponent } from "./FileReaderComponent";
import { parseMarker } from "../utils/MarkerUtils";
import { BoothActiveDay } from "../types/MapData";
import { parseActiveDayOrNull } from "../utils/BoothActiveDayUtils";

export function Header(): JSX.Element {
  return (
    <header>
      <span>選擇天數：</span>
      <select>選擇天數</select>
      <span>{"　|　"}</span>
      <button onClick={exportSetting}>匯出設定</button>
      <span>{"　|　"}</span>
      <span>匯入設定：</span>
      <FileReaderComponent onFileContentChange={importSetting} />
    </header>
  );
}

function exportSetting() {
  const settingMapMarkerList: Array<SettingMapMarker> =
    mapRecordService.getSettingMapMarkerList(EventType.FF44);

  const setting: Setting = {
    eventType: EventType[EventType.FF44],
    version: "1",
    mapMarker: settingMapMarkerList,
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
    const activeDay: BoothActiveDay | null = parseActiveDayOrNull(
      settingMapMarker.activeDay,
    );
    if (activeDay !== null) {
      mapRecordService.setMarker(
        CURRENT_EVENT_TYPE,
        activeDay,
        settingMapMarker.id,
        parseMarker(settingMapMarker.marker),
      );
    }
  });
}

import { JSX } from "preact";
import * as mapRecordService from "../services/MapRecordService";
import * as browserSettingService from "../services/BrowserSettingService";
import { getIsoDateStringForFilename } from "../utils/DateTimeUtils";
import { CURRENT_EVENT_TYPE, EventType } from "../types/EventType";
import { Setting, SettingMapMarker } from "../types/Setting";
import { FileReaderComponent } from "./FileReaderComponent";
import { parseMarker } from "../utils/MarkerUtils";
import { parseActiveDayOrNull } from "../utils/BoothActiveDayUtils";
import { DropDownList } from "./DropdownList";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import "./Header.css";
import { BoothActiveDay } from "../types/BoothActiveDay";
import {
  DEFAULT_ZOOM_IN_VALUE,
  DEFAULT_ZOOM_IN_VALUE_INDEX,
  ValidZoomInValue,
  zoomInValueList,
} from "../types/ZoomInValue";
import { clamp } from "../utils/NumberUtils";

type HeaderProps = {
  onActiveDayChange: (activeDay: StateUpdater<BoothActiveDay>) => void;
  currentZoomInValue: ValidZoomInValue;
  onZoomInValueChange: (zoomInValue: ValidZoomInValue) => void;
};

export function Header(props: HeaderProps): JSX.Element {
  const [zoomInIndex, setZoomInIndex] = useState<number>(
    getZoomInIndexOrDefault(),
  );

  useEffect(() => {
    setZoomInIndex(getZoomInIndexOrDefault());
  }, [props.currentZoomInValue]);

  const activeDayOptionValueList: Array<{
    option: JSX.Element;
    value: BoothActiveDay;
  }> = [
    {
      option: <>第一天</>,
      value: BoothActiveDay.day1,
    },
    {
      option: <>第二天</>,
      value: BoothActiveDay.day2,
    },
    {
      option: <>第三天</>,
      value: BoothActiveDay.day3,
    },
  ];
  function onZoomOut() {
    const newZoomInIndex = clamp(
      zoomInIndex - 1,
      0,
      zoomInValueList.length - 1,
    );
    setZoomInIndex(newZoomInIndex);

    const newZoomInValue = zoomInValueList[newZoomInIndex];
    browserSettingService.setZoomIn(newZoomInValue);
    props.onZoomInValueChange(newZoomInValue);
  }

  function onZoomIn() {
    const newZoomInIndex = clamp(
      zoomInIndex + 1,
      0,
      zoomInValueList.length - 1,
    );

    const newZoomInValue = zoomInValueList[newZoomInIndex];
    browserSettingService.setZoomIn(newZoomInValue);
    props.onZoomInValueChange(newZoomInValue);
  }

  return (
    <header>
      <DropDownList
        tipText="選擇天數："
        value={mapRecordService.getActiveDayOrDefault(
          EventType.FF44,
          BoothActiveDay.day1,
        )}
        optionValue={activeDayOptionValueList}
        onChange={(newActiveDay: BoothActiveDay) => {
          // FIXME: newActiveDay should be of type BoothActiveDay but is actually string
          const newActiveDayAsEnum = parseInt(
            newActiveDay as unknown as string,
          );
          mapRecordService.setActiveDay(EventType.FF44, newActiveDayAsEnum);
          props.onActiveDayChange(newActiveDayAsEnum);
        }}
      />
      <span>{"　|　"}</span>
      <button onClick={exportSetting}>匯出設定➡️</button>
      <span>{"　|　"}</span>
      <FileReaderComponent
        tipText="➡️匯入設定"
        onFileContentChange={importSetting}
      />
      <span>{"　|　"}</span>
      <span>調整大小：</span>
      <span class="fixedSizeSpan">{`x${zoomInValueList[zoomInIndex]}`}</span>
      <button onClick={onZoomOut}>{"　--　"}</button>
      <button onClick={onZoomIn}>{"　++　"}</button>
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

  mapRecordService.clear();

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

function getZoomInIndexOrDefault(): number {
  const storageZoomInValue = browserSettingService.getZoomInOrDefault(
    zoomInValueList,
    DEFAULT_ZOOM_IN_VALUE,
  );

  const foundZoomInIndex: number = zoomInValueList.findIndex(
    (e) => e === storageZoomInValue,
  );

  return foundZoomInIndex === -1
    ? DEFAULT_ZOOM_IN_VALUE_INDEX
    : foundZoomInIndex;
}

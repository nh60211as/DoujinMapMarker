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
import { Filter } from "../types/Filter";

type HeaderProps = {
  onActiveDayChange: (activeDay: StateUpdater<BoothActiveDay>) => void;
  currentZoomInValue: ValidZoomInValue;
  onZoomInValueChange: (zoomInValue: ValidZoomInValue) => void;
  onFilterChange: (filter: Filter) => void;
};

export function Header(props: HeaderProps): JSX.Element {
  const [zoomInIndex, setZoomInIndex] = useState<number>(
    getZoomInIndexOrDefault(),
  );

  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const openHeader = (): void => setHeaderVisible(true);
  const closeHeader = (): void => setHeaderVisible(false);

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

  const filterOptionValueList: Array<{
    option: JSX.Element;
    value: Filter;
  }> = [
    {
      option: <>不篩選</>,
      value: Filter.noFilter,
    },
    {
      option: <>只擺一天</>,
      value: Filter.onlyOneDay,
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

  function HeaderContent(): JSX.Element {
    return (
      <div class="gridContainer">
        <div class="gridItem">
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
          {getSourceLinkElement(
            mapRecordService.getActiveDayOrDefault(
              EventType.FF44,
              BoothActiveDay.day1,
            ),
          )}
        </div>
        <div class="gridItem">
          {" "}
          <DropDownList
            tipText="選擇篩選："
            value={Filter.noFilter}
            optionValue={filterOptionValueList}
            onChange={(filter: Filter) => {
              // FIXME: newActiveDay should be of type BoothActiveDay but is actually string
              const newFilterAsEnum = parseInt(filter as unknown as string);
              props.onFilterChange(newFilterAsEnum);
            }}
          />
        </div>
        <div class="gridItem">
          <FileReaderComponent
            tipText="➡️匯入設定"
            onFileContentChange={importSetting}
          />
          <button onClick={exportSetting}>匯出設定➡️</button>
        </div>
        <div class="gridItem">
          <span>調整大小：</span>
          <span class="fixedSizeSpan">{`x${zoomInValueList[zoomInIndex]}`}</span>
          <button onClick={onZoomOut}>{"　--　"}</button>
          <button onClick={onZoomIn}>{"　++　"}</button>
        </div>
      </div>
    );
  }

  return (
    <div class="customHeder">
      <button
        class="navButton"
        onClick={openHeader}
        style={{ display: headerVisible ? "none" : "block" }}
      >
        <img class="navIcon" />
      </button>
      <button
        class="xButton"
        onClick={closeHeader}
        style={{ display: headerVisible ? "block" : "none" }}
      >
        <img class="xIcon" />
      </button>
      {headerVisible === true ? <HeaderContent /> : <></>}
    </div>
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

function getSourceLink(activeDay: BoothActiveDay): string {
  switch (activeDay) {
    case BoothActiveDay.day1:
      return "https://www.f-2.com.tw/index.php?q=ff/169824";
    case BoothActiveDay.day2:
      return "https://www.f-2.com.tw/index.php?q=ff/169825";
    case BoothActiveDay.day3:
      return "https://www.f-2.com.tw/index.php?q=ff/169826";
  }
}

function getSourceLinkElement(activeDay: BoothActiveDay): JSX.Element {
  return (
    <a
      href={getSourceLink(activeDay)}
      target="_blank"
      rel="noopener noreferrer"
    >
      資料來源
    </a>
  );
}

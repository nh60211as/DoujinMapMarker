import { EVENT_CONFIG } from '../config/EventConfig';
import { setBoothActiveDay, useBoothActiveDay } from '../global/BoothActiveDay';
import { setZoomInValue, useZoomInValue } from '../global/ZoomInValue';
import * as browserSettingService from '../services/BrowserSettingService';
import * as mapRecordService from '../services/MapRecordService';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { Setting, SettingMapMarker } from '../types/Setting';
import {
  DEFAULT_ZOOM_IN_VALUE,
  DEFAULT_ZOOM_IN_VALUE_INDEX,
  ValidZoomInValue,
  zoomInValueList,
} from '../types/ZoomInValue';
import { parseActiveDayOrNull } from '../utils/BoothActiveDayUtils';
import { getIsoDateStringForFilename } from '../utils/DateTimeUtils';
import { parseMarker } from '../utils/MarkerUtils';
import { clamp } from '../utils/NumberUtils';
import { DropDownList } from './DropdownList';
import { FileReaderComponent } from './FileReaderComponent';
import style from './Header.module.css';
import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';

type HeaderProps = {
  onSearchButtonClicked: () => void;
};

export function Header(props: HeaderProps): JSX.Element {
  const zoomInValue: ValidZoomInValue = useZoomInValue();

  const [zoomInIndex, setZoomInIndex] = useState<number>(
    getZoomInIndexOrDefault(),
  );

  const [headerVisible, setHeaderVisible] = useState<boolean>(
    browserSettingService.getHeaderOpen(true),
  );
  const openHeader = (): void => {
    browserSettingService.setHeaderOpen(true);
    setHeaderVisible(true);
  };
  const closeHeader = (): void => {
    browserSettingService.setHeaderOpen(false);
    setHeaderVisible(false);
  };

  useEffect(() => {
    setZoomInIndex(getZoomInIndexOrDefault());
  }, [zoomInValue]);

  const activeDayOptionValueList: Array<{
    option: JSX.Element;
    value: BoothActiveDay;
  }> = EVENT_CONFIG.header.BOOTH_ACTIVE_DAY_OPTION_LIST.map(
    (boothActiveDayOption) => {
      return {
        option: <>{boothActiveDayOption.displayText}</>,
        value: boothActiveDayOption.boothActiveDay,
      };
    },
  );

  function onZoomOut() {
    const newZoomInIndex = clamp(
      zoomInIndex - 1,
      0,
      zoomInValueList.length - 1,
    );
    setZoomInIndex(newZoomInIndex);

    const newZoomInValue = zoomInValueList[newZoomInIndex];
    browserSettingService.setZoomIn(newZoomInValue);
    setZoomInValue(newZoomInValue);
  }

  function onZoomIn() {
    const newZoomInIndex = clamp(
      zoomInIndex + 1,
      0,
      zoomInValueList.length - 1,
    );

    const newZoomInValue = zoomInValueList[newZoomInIndex];
    browserSettingService.setZoomIn(newZoomInValue);
    setZoomInValue(newZoomInValue);
  }

  function HeaderContent(): JSX.Element {
    return (
      <div class={style.gridContainer}>
        <div class={style.gridItem}>
          <div>
            {getLinkElement(
              '手機安裝教學',
              'https://github.com/nh60211as/DoujinMapMarker/blob/master/docs/install_on_andriod.md',
            )}
          </div>
          <div>
            {getLinkElement(
              '原始碼',
              'https://github.com/nh60211as/DoujinMapMarker',
            )}
          </div>
        </div>
        <div class={style.gridItem}>
          <DropDownList
            tipText="選擇天數："
            value={mapRecordService.getActiveDayOrDefault()}
            optionValue={activeDayOptionValueList}
            onChange={(newActiveDay: BoothActiveDay) => {
              mapRecordService.setActiveDay(newActiveDay);
              setBoothActiveDay(newActiveDay);
            }}
          />
          <div>{getSourceLinkElement(useBoothActiveDay())}</div>
        </div>
        <div class={style.gridItem}>
          <div class={style.flexContainer}>
            <span>篩選攤位：</span>
            <button onClick={props.onSearchButtonClicked}>搜尋</button>
          </div>
        </div>
        <div class={style.gridItem}>
          <div class={style.flexContainer}>
            <FileReaderComponent
              tipText="➡️匯入設定"
              onFileContentChange={importSetting}
            />
            <button onClick={exportSetting}>匯出設定➡️</button>
          </div>
        </div>
        <div class={style.gridItem}>
          <span>調整大小：</span>
          <span
            class={style.fixedSizeSpan}
          >{`x${zoomInValueList[zoomInIndex]}`}</span>
          <div class={style.flexContainer}>
            <button class={style.zoomButton} onClick={onZoomOut}>
              -
            </button>
            <button class={style.zoomButton} onClick={onZoomIn}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class={style.customHeder}>
      <button
        class={style.navButton}
        onClick={openHeader}
        style={{ display: headerVisible ? 'none' : 'block' }}
      >
        <img class={style.navIcon} />
      </button>
      <button
        class={style.xButton}
        onClick={closeHeader}
        style={{ display: headerVisible ? 'block' : 'none' }}
      >
        <img class={style.xIcon} />
      </button>
      {headerVisible === true ? <HeaderContent /> : <></>}
    </div>
  );
}

function exportSetting() {
  const settingMapMarkerList: Array<SettingMapMarker> =
    mapRecordService.getSettingMapMarkerList();

  const setting: Setting = {
    version: '1',
    mapMarker: settingMapMarkerList,
  };

  const payload: string = JSON.stringify(setting);

  const blob = new Blob([payload], { type: 'application/json' });

  const url: string = URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = `${EVENT_CONFIG.general.CURRENT_EVENT_TYPE}-setting-${getIsoDateStringForFilename()}.json`;

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

function getSourceLinkElement(activeDay: BoothActiveDay): JSX.Element {
  return getLinkElement(
    '資料來源',
    EVENT_CONFIG.header.getSourceLink(activeDay),
  );
}

function getLinkElement(displayText: string, link: string): JSX.Element {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {displayText}
    </a>
  );
}

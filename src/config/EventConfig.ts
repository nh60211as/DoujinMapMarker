// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/FF46/group-data.json';
import MAP from '../assets/maps/FF46社團攤位配置圖.jpg';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { EventType } from '../types/EventType';
import { ImageSize } from '../types/ImageSize';

type EventConfigInterface = {
  general: {
    CURRENT_EVENT_TYPE: EventType;
    RAW_GROUP_DATA: any;
  };
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string) => BoothActiveDay;
  };
  header: {
    // NOTE: every BoothActiveDay should be present
    BOOTH_ACTIVE_DAY_OPTION_LIST: Array<{
      boothActiveDay: BoothActiveDay;
      displayText: string;
    }>;
    getSourceLink: (activeDay: BoothActiveDay) => string;
  };
  map: {
    DEFAULT_MAP_IMAGE_SIZE: ImageSize;
    getImageSrcByActiveDay: (activeDay: BoothActiveDay) => string;
  };
  booth: {
    // NOTE: every BoothActiveDay should be present
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: Array<{
      boothActiveDay: BoothActiveDay;
      singleDayBoothInfoPrefixText: string;
    }>;
  };
};

// NOTE: The implementation should be changed with each event
export const EVENT_CONFIG: EventConfigInterface = {
  general: {
    CURRENT_EVENT_TYPE: 'FF46',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'CWT72_DAY_1';
        case '2':
          return 'CWT72_DAY_2';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'CWT72_DAY_1',
        displayText: '02/06 (六)',
      },
      {
        boothActiveDay: 'CWT72_DAY_2',
        displayText: '02/07 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'CWT72_DAY_1':
          return 'https://www.f-2.com.tw/%e3%80%90ff46%e3%80%91%e7%ac%ac%e4%b8%80%e5%a4%a9%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
        case 'CWT72_DAY_2':
          return 'https://www.f-2.com.tw/%e3%80%90ff46%e3%80%91%e7%ac%ac%e4%ba%8c%e5%a4%a9%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 1024, height: 724 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'CWT72_DAY_1':
          return MAP;
        case 'CWT72_DAY_2':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'CWT72_DAY_1',
        singleDayBoothInfoPrefixText: '02/21 (六) 攤位：',
      },
      {
        boothActiveDay: 'CWT72_DAY_2',
        singleDayBoothInfoPrefixText: '02/22 (日) 攤位：',
      },
    ],
  },
};

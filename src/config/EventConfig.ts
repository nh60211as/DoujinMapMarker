// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/FF47/group-data.json';
import MAP from '../assets/maps/FF47社團攤位配置圖-2048x1447.jpg';
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
    CURRENT_EVENT_TYPE: 'FF47',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'FF47_DAY_1';
        case '2':
          return 'FF47_DAY_2';
        case '3':
          return 'FF47_DAY_3';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'FF47_DAY_1',
        displayText: '08/21 (五)',
      },
      {
        boothActiveDay: 'FF47_DAY_2',
        displayText: '08/22 (六)',
      },
      {
        boothActiveDay: 'FF47_DAY_3',
        displayText: '08/23 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'FF47_DAY_1':
          return 'https://www.f-2.com.tw/%E3%80%90ff47%E3%80%91%E7%AC%AC%E4%B8%80%E5%A4%A9%E6%94%A4%E4%BD%8D%E7%B7%A8%E8%99%9F/';
        case 'FF47_DAY_2':
          return 'https://www.f-2.com.tw/%e3%80%90ff47%e3%80%91%e7%ac%ac%e4%ba%8c%e5%a4%a9%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
        case 'FF47_DAY_3':
          return 'https://www.f-2.com.tw/%e3%80%90ff47%e3%80%91%e7%ac%ac%e4%b8%89%e5%a4%a9%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 2048, height: 1447 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'FF47_DAY_1':
        case 'FF47_DAY_2':
        case 'FF47_DAY_3':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'FF47_DAY_1',
        singleDayBoothInfoPrefixText: '08/21 (五) 攤位：',
      },
      {
        boothActiveDay: 'FF47_DAY_2',
        singleDayBoothInfoPrefixText: '08/22 (六) 攤位：',
      },
      {
        boothActiveDay: 'FF47_DAY_3',
        singleDayBoothInfoPrefixText: '08/23 (日) 攤位：',
      },
    ],
  },
};

// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/PF43/group-data.json';
import MAP1 from '../assets/maps/PF43社團攤位配置圖_未完整2_D1.jpg';
import MAP2 from '../assets/maps/PF43社團攤位配置圖_未完整2_D2.jpg';
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
    CURRENT_EVENT_TYPE: 'PF43',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'PF43_DAY_1';
        case '2':
          return 'PF43_DAY_2';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'PF43_DAY_1',
        displayText: '11/01 (六)',
      },
      {
        boothActiveDay: 'PF43_DAY_2',
        displayText: '11/02 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'PF43_DAY_1':
          return 'https://www.f-2.com.tw/pf43-x-rf13-%e9%a6%96%e6%97%a5%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
        case 'PF43_DAY_2':
          return 'https://www.f-2.com.tw/pf43-x-rf13-%e6%ac%a1%e6%97%a5%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 3508, height: 2480 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'PF43_DAY_1':
          return MAP1;
        case 'PF43_DAY_2':
          return MAP2;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'PF43_DAY_1',
        singleDayBoothInfoPrefixText: '11/01 (六) 攤位：',
      },
      {
        boothActiveDay: 'PF43_DAY_2',
        singleDayBoothInfoPrefixText: '11/02 (日) 攤位：',
      },
    ],
  },
};

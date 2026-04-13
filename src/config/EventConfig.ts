// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/PF44/group-data.json';
import MAP from '../assets/maps/PF44_circleMap.jpg';
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
          return 'PF44_DAY_1';
        case '2':
          return 'PF44_DAY_2';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'PF44_DAY_1',
        displayText: '05/16 (六)',
      },
      {
        boothActiveDay: 'PF44_DAY_2',
        displayText: '05/17 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'PF44_DAY_1':
          return 'https://www.f-2.com.tw/pf44-%e9%a6%96%e6%97%a5%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
        case 'PF44_DAY_2':
          return 'https://www.f-2.com.tw/pf44-%e6%ac%a1%e6%97%a5%e6%94%a4%e4%bd%8d%e7%b7%a8%e8%99%9f/';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 6736, height: 4760 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'PF44_DAY_1':
          return MAP;
        case 'PF44_DAY_2':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'PF44_DAY_1',
        singleDayBoothInfoPrefixText: '05/16 (六) 攤位：',
      },
      {
        boothActiveDay: 'PF44_DAY_2',
        singleDayBoothInfoPrefixText: '05/17 (日) 攤位：',
      },
    ],
  },
};

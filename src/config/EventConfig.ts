// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/FF45/group-data.json';
import MAP from '../assets/maps/2025_FF45_MAP.jpg';
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
    CURRENT_EVENT_TYPE: 'FF45',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'FF45_DAY_1';
        case '2':
          return 'FF45_DAY_2';
        case '3':
          return 'FF45_DAY_3';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'FF45_DAY_1',
        displayText: '08/22 (五)',
      },
      {
        boothActiveDay: 'FF45_DAY_2',
        displayText: '08/23 (六)',
      },
      {
        boothActiveDay: 'FF45_DAY_3',
        displayText: '08/24 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'FF45_DAY_1':
          return 'https://www.f-2.com.tw/?p=1746';
        case 'FF45_DAY_2':
          return 'https://www.f-2.com.tw/?p=1748';
        case 'FF45_DAY_3':
          return 'https://www.f-2.com.tw/?p=1750';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 3508, height: 2480 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'FF45_DAY_1':
          return MAP;
        case 'FF45_DAY_2':
          return MAP;
        case 'FF45_DAY_3':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'FF45_DAY_1',
        singleDayBoothInfoPrefixText: '08/22 (五) 攤位：',
      },
      {
        boothActiveDay: 'FF45_DAY_2',
        singleDayBoothInfoPrefixText: '08/23 (六) 攤位：',
      },
      {
        boothActiveDay: 'FF45_DAY_3',
        singleDayBoothInfoPrefixText: '08/24 (日) 攤位：',
      },
    ],
  },
};

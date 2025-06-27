// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/IF6/group-data.json';
import MAP from '../assets/maps/DAY_2_MAP.png';
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
    CURRENT_EVENT_TYPE: 'CWT70',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'CWT70_DAY_1';
        case '2':
          return 'CWT70_DAY_2';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'CWT70_DAY_1',
        displayText: '08/16 (六)',
      },
      {
        boothActiveDay: 'CWT70_DAY_2',
        displayText: '08/17 (日)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'CWT70_DAY_1':
          return 'https://www.comicworld.com.tw/Act4/160';
        case 'CWT70_DAY_2':
          return 'https://www.comicworld.com.tw/Act4/160';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 1360, height: 1359 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'CWT70_DAY_1':
          return MAP;
        case 'CWT70_DAY_2':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'CWT70_DAY_1',
        singleDayBoothInfoPrefixText: '08/16 (六) 攤位：',
      },
      {
        boothActiveDay: 'CWT70_DAY_2',
        singleDayBoothInfoPrefixText: '08/17 (日) 攤位：',
      },
    ],
  },
};

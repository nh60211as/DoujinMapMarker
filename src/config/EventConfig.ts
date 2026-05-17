// NOTE: The implementation should be changed with each event
import rawGroupData from '../../generated-data/IF7/group-data.json';
import MAP from '../assets/maps/map2026.png';
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
    CURRENT_EVENT_TYPE: 'IF7',
    RAW_GROUP_DATA: rawGroupData,
  },
  data: {
    stringToBoothActiveDay: (boothActiveDayStr: string): BoothActiveDay => {
      switch (boothActiveDayStr) {
        case '1':
          return 'IF7_DAY_1';
        default:
          throw Error(`Unexpected boothActiveDayStr [${boothActiveDayStr}].`);
      }
    },
  },
  header: {
    BOOTH_ACTIVE_DAY_OPTION_LIST: [
      {
        boothActiveDay: 'IF7_DAY_1',
        displayText: '05/30 (六)',
      },
    ],
    getSourceLink: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'IF7_DAY_1':
          return 'https://if.gjs.tw/circle-list.html';
      }
    },
  },
  map: {
    DEFAULT_MAP_IMAGE_SIZE: { width: 1501, height: 1500 },
    getImageSrcByActiveDay: (activeDay: BoothActiveDay): string => {
      switch (activeDay) {
        case 'IF7_DAY_1':
          return MAP;
      }
    },
  },
  booth: {
    BOOTH_ACTIVE_DAY_DISPLAY_INFO_LIST: [
      {
        boothActiveDay: 'IF7_DAY_1',
        singleDayBoothInfoPrefixText: '05/30 (六) 攤位：',
      },
    ],
  },
};

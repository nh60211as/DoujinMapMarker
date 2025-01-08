import { BoothActiveDay } from './BoothActiveDay';
import { BoothNumber } from './BoothNumber';

export type Booth = {
  activeDay: BoothActiveDay;
  boothNumberList: Array<BoothNumber>;
};

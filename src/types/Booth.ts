import { BoothNumber } from "./BoothNumber";
import { BoothActiveDay } from "./BoothActiveDay";

export type Booth = {
  activeDay: BoothActiveDay;
  boothNumberList: Array<BoothNumber>;
};

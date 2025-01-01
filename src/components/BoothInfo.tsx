import { JSX } from "preact";
import { Booth } from "../types/Booth";
import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothNumber } from "../types/BoothNumber";
import "./BoothInfo.css";

type BoothInfoProps = {
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
};

export function BoothInfo(props: BoothInfoProps): JSX.Element {
  return (
    <>
      <SingleDayBoothInfo
        prefix="第一天(02/07)攤位："
        activeDay={BoothActiveDay.day1}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
      />
      <SingleDayBoothInfo
        prefix="第二天(02/08)攤位："
        activeDay={BoothActiveDay.day2}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
      />
      <SingleDayBoothInfo
        prefix="第三天(02/09)攤位："
        activeDay={BoothActiveDay.day3}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
      />
    </>
  );
}

function SingleDayBoothInfo(props: {
  prefix: string;
  activeDay: BoothActiveDay;
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
}) {
  const content = `${props.prefix}${getBoothNumberListAsString(props.boothList, props.activeDay)}`;
  if (props.activeDay === props.currentActiveDay) {
    return <p class="highlightText">{content}</p>;
  }
  return <p>{content}</p>;
}

function findBoothNumberListByActiveDay(
  boothList: Array<Booth>,
  activeDay: BoothActiveDay,
): Array<BoothNumber> {
  const foundBooth: Booth | undefined = boothList.find(
    (e) => e.activeDay === activeDay,
  );

  if (foundBooth === undefined) {
    return [];
  }

  return foundBooth.boothNumberList;
}

function boothNumberToString(boothNumber: BoothNumber): string {
  return boothNumber.row + boothNumber.number.toString().padStart(2, "0");
}

function getBoothNumberListAsString(
  boothList: Array<Booth>,
  activeDay: BoothActiveDay,
): string {
  return findBoothNumberListByActiveDay(boothList, activeDay)
    .map(boothNumberToString)
    .join(", ");
}

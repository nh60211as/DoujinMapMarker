import { JSX } from "preact";
import { Booth } from "../types/Booth";
import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothNumber } from "../types/BoothNumber";
import "./BoothInfo.css";
import { Marker } from "../types/Marker";

type BoothInfoProps = {
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
  onMarkerSet: (activeDay: BoothActiveDay, marker: Marker) => void;
};

export function BoothInfo(props: BoothInfoProps): JSX.Element {
  return (
    <>
      <SingleDayBoothInfo
        prefix="第一天(02/07)攤位："
        activeDay={BoothActiveDay.day1}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
        onMarkerSet={(newMarker) =>
          props.onMarkerSet(BoothActiveDay.day1, newMarker)
        }
      />
      <SingleDayBoothInfo
        prefix="第二天(02/08)攤位："
        activeDay={BoothActiveDay.day2}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
        onMarkerSet={(newMarker) =>
          props.onMarkerSet(BoothActiveDay.day2, newMarker)
        }
      />
      <SingleDayBoothInfo
        prefix="第三天(02/09)攤位："
        activeDay={BoothActiveDay.day3}
        boothList={props.boothList}
        currentActiveDay={props.currentActiveDay}
        onMarkerSet={(newMarker) =>
          props.onMarkerSet(BoothActiveDay.day3, newMarker)
        }
      />
    </>
  );
}

function SingleDayBoothInfo(props: {
  prefix: string;
  activeDay: BoothActiveDay;
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
  onMarkerSet: (marker: Marker) => void;
}): JSX.Element {
  const content = `${props.prefix}${getBoothNumberListAsString(props.boothList, props.activeDay)}`;

  const isHighlight: boolean = props.activeDay === props.currentActiveDay;

  return (
    <>
      <p class={getHighlightCssClass(isHighlight)}>{content}</p>
      <MarkerButtons
        onMarkerSet={props.onMarkerSet}
        isHighlight={isHighlight}
      />
    </>
  );
}

function getHighlightCssClass(isHighlight: boolean): string {
  return isHighlight ? "highlightText" : "";
}

function MarkerButtons(props: {
  onMarkerSet: (marker: Marker) => void;
  isHighlight: boolean;
}): JSX.Element {
  return (
    <p class={getHighlightCssClass(props.isHighlight)}>
      標記：
      <button
        class="plannedToGoButton"
        onClick={() => props.onMarkerSet(Marker.plannedToGo)}
      >
        還沒去過
      </button>
      <span>{"　|　"}</span>
      <button
        class="alreadyGoneButton"
        onClick={() => props.onMarkerSet(Marker.alreadyGone)}
      >
        已去過
      </button>
      <span>{"　|　"}</span>
      <button onClick={() => props.onMarkerSet(Marker.none)}>取消標記</button>
    </p>
  );
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

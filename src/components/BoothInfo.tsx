import { JSX } from "preact";
import { Booth } from "../types/Booth";
import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothNumber } from "../types/BoothNumber";
import style from "./BoothInfo.module.css";
import { Marker } from "../types/Marker";
import * as mapRecordService from "../services/MapRecordService";
import { EventType } from "../types/EventType";

type BoothInfoProps = {
  groupId: string;
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
  onMarkerSet: (activeDay: BoothActiveDay, marker: Marker) => void;
};

export function BoothInfo(props: BoothInfoProps): JSX.Element {
  const isDay1Active: boolean =
    props.boothList.findIndex((e) => e.activeDay === BoothActiveDay.day1) !==
    -1;
  const isDay2Active: boolean =
    props.boothList.findIndex((e) => e.activeDay === BoothActiveDay.day2) !==
    -1;
  const isDay3Active: boolean =
    props.boothList.findIndex((e) => e.activeDay === BoothActiveDay.day3) !==
    -1;

  return (
    <>
      {isDay1Active === true ? (
        <SingleDayBoothInfo
          prefix="第一天(02/07)攤位："
          groupId={props.groupId}
          activeDay={BoothActiveDay.day1}
          boothList={props.boothList}
          currentActiveDay={props.currentActiveDay}
          onMarkerSet={(newMarker) =>
            props.onMarkerSet(BoothActiveDay.day1, newMarker)
          }
        />
      ) : (
        <></>
      )}

      {isDay2Active === true ? (
        <SingleDayBoothInfo
          prefix="第二天(02/08)攤位："
          groupId={props.groupId}
          activeDay={BoothActiveDay.day2}
          boothList={props.boothList}
          currentActiveDay={props.currentActiveDay}
          onMarkerSet={(newMarker) =>
            props.onMarkerSet(BoothActiveDay.day2, newMarker)
          }
        />
      ) : (
        <></>
      )}

      {isDay3Active === true ? (
        <SingleDayBoothInfo
          prefix="第三天(02/09)攤位："
          groupId={props.groupId}
          activeDay={BoothActiveDay.day3}
          boothList={props.boothList}
          currentActiveDay={props.currentActiveDay}
          onMarkerSet={(newMarker) =>
            props.onMarkerSet(BoothActiveDay.day3, newMarker)
          }
        />
      ) : (
        <></>
      )}
    </>
  );
}

function SingleDayBoothInfo(props: {
  prefix: string;
  groupId: string;
  activeDay: BoothActiveDay;
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
  onMarkerSet: (marker: Marker) => void;
}): JSX.Element {
  const content = `${props.prefix}${getBoothNumberListAsString(props.boothList, props.activeDay)}`;

  const isHighlight: boolean = props.activeDay === props.currentActiveDay;

  const marker: Marker = mapRecordService.getMarker(
    EventType.FF44,
    props.activeDay,
    props.groupId,
  );

  return (
    <>
      <p class={getHighlightCssClass(isHighlight)}>{content}</p>
      <MarkerButtons
        onMarkerSet={props.onMarkerSet}
        isHighlight={isHighlight}
        activeMarkerButton={marker}
      />
    </>
  );
}

function getHighlightCssClass(isHighlight: boolean): string {
  return isHighlight ? style.highlightText : "";
}

function MarkerButtons(props: {
  onMarkerSet: (marker: Marker) => void;
  isHighlight: boolean;
  activeMarkerButton: Marker;
}): JSX.Element {
  const plannedToGoButtonCssClass =
    props.activeMarkerButton === Marker.plannedToGo ? style.activeButton : "";
  const alreadyGoneButtonCssClass =
    props.activeMarkerButton === Marker.alreadyGone ? style.activeButton : "";

  return (
    <p class={getHighlightCssClass(props.isHighlight)}>
      標記：
      <button
        class={`${style.plannedToGoButton} ${plannedToGoButtonCssClass}`}
        onClick={() => props.onMarkerSet(Marker.plannedToGo)}
      >
        還沒去過
      </button>
      <span>{"　|　"}</span>
      <button
        class={`${style.alreadyGoneButton} ${alreadyGoneButtonCssClass}`}
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

import * as mapRecordService from '../services/MapRecordService';
import { Booth } from '../types/Booth';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { BoothNumber } from '../types/BoothNumber';
import { Marker } from '../types/Marker';
import style from './BoothInfo.module.css';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';

type BoothInfoProps = {
  groupId: string;
  boothList: Array<Booth>;
  currentActiveDay: BoothActiveDay;
  onMarkerSet: (activeDay: BoothActiveDay, marker: Marker) => void;
};

// NOTE: The implementation should be changed with each event
export function BoothInfo(props: BoothInfoProps): JSX.Element {
  const isDay1Active: boolean =
    props.boothList.findIndex((e) => e.activeDay === 'IF6_DAY_1') !== -1;

  return (
    <>
      {isDay1Active === true ? (
        <SingleDayBoothInfo
          prefix="05/10 攤位："
          groupId={props.groupId}
          activeDay={'IF6_DAY_1'}
          boothList={props.boothList}
          currentActiveDay={props.currentActiveDay}
          onMarkerSet={(newMarker) => props.onMarkerSet('IF6_DAY_1', newMarker)}
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
  const [marker, setMarker] = useState<Marker>(
    mapRecordService.getMarker(props.activeDay, props.groupId),
  );

  const content = `${props.prefix}${getBoothNumberListAsString(props.boothList, props.activeDay)}`;

  const isHighlight: boolean = props.activeDay === props.currentActiveDay;

  return (
    <>
      <p class={getHighlightCssClass(isHighlight)}>{content}</p>
      <MarkerButtons
        onMarkerSet={(marker: Marker) => {
          setMarker(marker);
          props.onMarkerSet(marker);
        }}
        isHighlight={isHighlight}
        activeMarkerButton={marker}
      />
    </>
  );
}

function getHighlightCssClass(isHighlight: boolean): string {
  return isHighlight ? style.highlightText : '';
}

function MarkerButtons(props: {
  onMarkerSet: (marker: Marker) => void;
  isHighlight: boolean;
  activeMarkerButton: Marker;
}): JSX.Element {
  const plannedToGoButtonCssClass =
    props.activeMarkerButton === Marker.plannedToGo ? style.activeButton : '';
  const alreadyGoneButtonCssClass =
    props.activeMarkerButton === Marker.alreadyGone ? style.activeButton : '';

  return (
    <p class={getHighlightCssClass(props.isHighlight)}>
      標記：
      <button
        class={`${style.plannedToGoButton} ${plannedToGoButtonCssClass}`}
        onClick={() => props.onMarkerSet(Marker.plannedToGo)}
      >
        還沒去過
      </button>
      <span>{'　|　'}</span>
      <button
        class={`${style.alreadyGoneButton} ${alreadyGoneButtonCssClass}`}
        onClick={() => props.onMarkerSet(Marker.alreadyGone)}
      >
        已去過
      </button>
      <span>{'　|　'}</span>
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
  return boothNumber.row + boothNumber.number.toString().padStart(2, '0');
}

function getBoothNumberListAsString(
  boothList: Array<Booth>,
  activeDay: BoothActiveDay,
): string {
  return findBoothNumberListByActiveDay(boothList, activeDay)
    .map(boothNumberToString)
    .join(', ');
}

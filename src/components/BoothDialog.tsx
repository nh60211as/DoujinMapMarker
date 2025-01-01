import { JSX } from "preact";
import { Marker } from "../types/Marker";
import { useEffect, useRef } from "preact/hooks";
import { Point } from "../types/Point";
import { GroupData } from "../types/GroupData";
import { BoothInfo } from "./BoothInfo";
import { BoothActiveDay } from "../types/BoothActiveDay";

type BoothDialogProps = {
  groupData: GroupData;
  currentActiveDay: BoothActiveDay;
  point: Point;
  openDialog: boolean;
  closeDialog: () => void;
  setMarker: (marker: Marker) => void;
};

export function BoothDialog(props: BoothDialogProps): JSX.Element {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.openDialog) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.openDialog]);

  return (
    <dialog
      ref={ref}
      style={{
        position: "absolute",
        left: props.point.x,
        top: props.point.y,
        width: 350,
        maxHeight: 500,
      }}
    >
      <p>攤位名稱：{props.groupData.groupName}</p>
      <p>攤位連結：{getLink(props.groupData.groupLink)}</p>
      <p>
        標記：
        <button onClick={() => props.setMarker(Marker.plannedToGo)}>
          還沒去過
        </button>
        <span>{"　|　"}</span>
        <button onClick={() => props.setMarker(Marker.alreadyGone)}>
          已去過
        </button>
        <span>{"　|　"}</span>
        <button onClick={() => props.setMarker(Marker.none)}>取消標記</button>
      </p>
      <BoothInfo
        boothList={props.groupData.boothList}
        currentActiveDay={props.currentActiveDay}
      />
      <button onClick={props.closeDialog}>關閉</button>
    </dialog>
  );
}

function getLink(boothLink: string | null): JSX.Element {
  if (boothLink === null) {
    return <></>;
  }
  return (
    <a href={boothLink} target="_blank" rel="noopener noreferrer">
      {boothLink}
    </a>
  );
}

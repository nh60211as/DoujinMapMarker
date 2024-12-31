import { JSX } from "preact";
import { Marker } from "../types/Marker";
import { useEffect, useRef } from "preact/hooks";
import { Point } from "../types/Point";
import { BoothDataOnMap } from "../types/BoothData";
import { BoothNumber } from "../types/BoothNumber";

type BoothDialogProps = {
  boothDataOnMap: BoothDataOnMap;
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
        height: 250,
      }}
    >
      <p>攤位名稱：{props.boothDataOnMap.groupName}</p>
      <p>
        攤位編號：
        {combineBoothNumbers(props.boothDataOnMap.booth.boothNumberList)}
      </p>
      <p>攤位連結：{getLink(props.boothDataOnMap.groupLink)}</p>
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
      <button onClick={props.closeDialog}>關閉</button>
    </dialog>
  );
}

function boothNumberToString(boothNumber: BoothNumber): string {
  return boothNumber.row + boothNumber.number.toString().padStart(2, "0");
}

function combineBoothNumbers(boothNumberList: Array<BoothNumber>): string {
  return boothNumberList.map(boothNumberToString).join(", ");
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

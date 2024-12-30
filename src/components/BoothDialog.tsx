import { JSX } from "preact";
import { MapData } from "../types/MapData";
import { Marker } from "../types/Marker";
import "./BoothDialog.style.css";
import { useEffect, useRef } from "preact/hooks";

type BoothDialogProps = {
  mapData: MapData;
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
    <dialog ref={ref}>
      <p>攤位名稱：{props.mapData.boothName}</p>
      <p>攤位編號：{combineBoothNumbers(props.mapData.boothNumbers)}</p>
      <p>攤位連結：{getLink(props.mapData.boothLink)}</p>
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

function combineBoothNumbers(boothNumbers: Array<string>): string {
  return boothNumbers.join(", ");
}

function getLink(boothLink: string | undefined): JSX.Element {
  if (boothLink === undefined) {
    return <></>;
  }
  return (
    <a href={boothLink} target="_blank" rel="noopener noreferrer">
      {boothLink}
    </a>
  );
}

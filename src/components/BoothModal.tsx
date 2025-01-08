import { JSX } from "preact";
import { Marker } from "../types/Marker";
import { GroupData } from "../types/GroupData";
import { BoothInfo } from "./BoothInfo";
import { BoothActiveDay } from "../types/BoothActiveDay";
import style from "./BoothModal.module.css";

type BoothModalProps = {
  groupData: GroupData;
  currentActiveDay: BoothActiveDay;
  openModal: boolean;
  onModalClose: () => void;
  onMarkerSet: (activeDay: BoothActiveDay, marker: Marker) => void;
};

export function BoothModal(props: BoothModalProps): JSX.Element {
  return (
    <div
      class={style.modalBackground}
      onClick={props.onModalClose}
      style={{ display: props.openModal ? "block" : "none" }}
    >
      <div class={style.modal}>
        <div
          class={style.modalContent}
          onClick={(e): void => {
            // stop click event to go to modalBackground and trigger its click event
            e.stopPropagation();
          }}
        >
          <p>
            <span class={style.unselectableSpan}>攤位名稱：</span>
            <span>{props.groupData.groupName}</span>
          </p>
          <p>
            <span class={style.unselectableSpan}>攤位連結：</span>
            <span>{getLink(props.groupData.groupLink)}</span>
          </p>
          <BoothInfo
            groupId={props.groupData.groupId}
            boothList={props.groupData.boothList}
            currentActiveDay={props.currentActiveDay}
            onMarkerSet={props.onMarkerSet}
          />
        </div>
      </div>
    </div>
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

import { useBoothActiveDay } from '../global/BoothActiveDay';
import { closeBoothModal, useBoothModalState } from '../global/BoothModalState';
import * as groupDataService from '../services/GroupDataService';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { GroupData } from '../types/GroupData';
import { Marker } from '../types/Marker';
import { BoothInfo } from './BoothInfo';
import style from './BoothModal.module.css';
import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';

type BoothModalProps = {
  onMarkerSet: (
    groupId: string,
    activeDay: BoothActiveDay,
    marker: Marker,
  ) => void;
};

const BoothModal = (props: BoothModalProps): JSX.Element => {
  const boothActiveDay: BoothActiveDay = useBoothActiveDay();
  const modalState = useBoothModalState();

  const [groupData, setGroupData] = useState<GroupData | null>(null);

  useEffect(() => {
    if (modalState.groupId === null) {
      setGroupData(null);
      return;
    }

    setGroupData(groupDataService.getGroupDataByGroupId(modalState.groupId));
  }, [modalState.groupId]);

  function ModalContent(): JSX.Element {
    if (groupData === null) {
      return <></>;
    }

    return (
      <>
        <p class={style.wrappedP}>
          <span class={style.unselectableSpan}>攤位名稱：</span>
          <span>{groupData.groupName}</span>
        </p>
        <p class={style.wrappedP}>
          <span class={style.unselectableSpan}>標籤：</span>
          <span>{groupData.tagList.join(', ')}</span>
        </p>
        <p class={style.wrappedP}>
          <span class={style.unselectableSpan}>攤位連結：</span>
          <span>{getLink(groupData.groupLink)}</span>
        </p>
        <BoothInfo
          groupId={groupData.groupId}
          boothList={groupData.boothList}
          currentActiveDay={boothActiveDay}
          onMarkerSet={(activeDay: BoothActiveDay, marker: Marker) =>
            props.onMarkerSet(groupData.groupId, activeDay, marker)
          }
        />
      </>
    );
  }

  return (
    <div
      class={style.modalBackground}
      onClick={closeBoothModal}
      style={{ display: modalState.isOpen ? 'block' : 'none' }}
    >
      <div class={style.modal}>
        <div
          class={style.modalContent}
          onClick={(e): void => {
            // stop click event to go to modalBackground and trigger its click event
            e.stopPropagation();
          }}
        >
          <ModalContent />
        </div>
      </div>
    </div>
  );
};

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

export default BoothModal;

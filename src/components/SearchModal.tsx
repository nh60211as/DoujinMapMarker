import * as groupDataService from '../services/GroupDataService';
import { GroupData } from '../types/GroupData';
import style from './SearchModal.module.css';
import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { DebounceInput } from 'react-debounce-input';

type SearchModalProps = {
  openModal: boolean;
  onModalClose: () => void;
  onBoothInfoClicked: (groupData: GroupData) => void;
};

export function SearchModal(props: SearchModalProps): JSX.Element {
  if (props.openModal === false) {
    return <></>;
  }

  const [searchContent, setSearchContent] = useState<string | null>(null);
  const [filteredGroupDataList, setFilteredGroupDataList] = useState<
    Array<GroupData>
  >([]);

  useEffect(() => {
    if (searchContent === null) {
      setFilteredGroupDataList([]);
    } else {
      setFilteredGroupDataList(
        groupDataService.searchByGroupName(searchContent),
      );
    }
  }, [searchContent]);

  return (
    <div class={style.modalBackground} onClick={props.onModalClose}>
      <div class={style.modal}>
        <div
          class={`${style.modalContent} ${style.flexContainer}`}
          onClick={(e): void => {
            // stop click event to go to modalBackground and trigger its click event
            e.stopPropagation();
          }}
        >
          <div>
            <DebounceInput
              debounceTimeout={1}
              placeholder={'輸入攤位名稱'}
              onChange={(event: any) => {
                const trimmedValue: string = event.target.value.trim();
                if (trimmedValue === '') {
                  setSearchContent(null);
                } else {
                  setSearchContent(trimmedValue);
                }
              }}
            />
          </div>
          <div>
            <GroupTable
              groupDataList={filteredGroupDataList}
              onBoothInfoClicked={props.onBoothInfoClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupTable(props: {
  groupDataList: Array<GroupData>;
  onBoothInfoClicked: (groupData: GroupData) => void;
}): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>攤位資訊</th>
          <th>攤位名稱</th>
          <th>攤位連結</th>
        </tr>
      </thead>
      <tbody>
        {props.groupDataList.map((e) => (
          <tr key={e.groupId}>
            <td>
              <button onClick={() => props.onBoothInfoClicked(e)}>
                攤位資訊
              </button>
            </td>
            <td>{e.groupName}</td>
            <td>{getLink(e.groupLink)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getLink(boothLink: string | null): JSX.Element {
  if (boothLink === null) {
    return <></>;
  }
  return (
    <a href={boothLink} target="_blank" rel="noopener noreferrer">
      連結
    </a>
  );
}

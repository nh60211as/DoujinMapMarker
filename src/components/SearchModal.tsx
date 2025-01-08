import * as groupDataService from '../services/GroupDataService';
import { GroupData } from '../types/GroupData';
import style from './SearchModal.module.css';
import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { DebounceInput } from 'react-debounce-input';

type SearchModalProps = {
  openModal: boolean;
  onModalClose: () => void;
  groupData: Array<GroupData>;
};

export function SearchModal(props: SearchModalProps): JSX.Element {
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
    <div
      class={style.modalBackground}
      onClick={props.onModalClose}
      style={{ display: props.openModal ? 'block' : 'none' }}
    >
      <div class={style.modal}>
        <div
          class={style.modalContent}
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
            <GroupTable groupDataList={filteredGroupDataList} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupTable(props: { groupDataList: Array<GroupData> }): JSX.Element {
  if (props.groupDataList.length === 0) {
    return <></>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>攤位名稱</th>
        </tr>
      </thead>
      <tbody>
        {props.groupDataList.map((e) => (
          <tr key={e.groupId}>
            <td>{e.groupName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

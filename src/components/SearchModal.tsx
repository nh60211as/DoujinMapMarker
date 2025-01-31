import { TAG_LIST } from '../../data/TagList';
import {
  closeSearchModal,
  useSearchModalState,
} from '../global/SearchModalState';
import * as groupDataService from '../services/GroupDataService';
import { GroupData } from '../types/GroupData';
import style from './SearchModal.module.css';
import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { DebounceInput } from 'react-debounce-input';
import stringSimilarity from 'string-similarity-js';

type SearchModalProps = {
  onBoothInfoClicked: (groupId: string) => void;
};

const SearchModal = (props: SearchModalProps): JSX.Element => {
  const modalState = useSearchModalState();

  const [activeTagList, setActiveTagList] = useState<Array<string>>([]);
  const [searchContent, setSearchContent] = useState<string | null>(null);
  const [filteredGroupDataList, setFilteredGroupDataList] = useState<
    Array<GroupData>
  >([]);

  useEffect(() => {
    let actualSearchContent = '';
    if (searchContent === null) {
      actualSearchContent = '';
    } else {
      actualSearchContent = searchContent;
    }

    const searchResult: Array<GroupData> =
      searchByGroupNameAndRandBySimilarity(actualSearchContent);

    let searchResultFilteredByTag: Array<GroupData> = [];
    if (activeTagList.length === 0) {
      searchResultFilteredByTag = searchResult;
    } else {
      searchResultFilteredByTag = searchResult.filter((e) =>
        e.tagList.some((tag) => activeTagList.includes(tag)),
      );
    }

    setFilteredGroupDataList(searchResultFilteredByTag);
  }, [activeTagList, searchContent]);

  return (
    <div
      class={style.modalBackground}
      onClick={closeSearchModal}
      style={{ display: modalState.isOpen ? 'block' : 'none' }}
    >
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
              debounceTimeout={0}
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
            <TagListToggle onTagListChanged={setActiveTagList} />
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
};

function TagListToggle(props: {
  onTagListChanged: (newTagList: Array<string>) => void;
}): JSX.Element {
  const [tagListToggleList, setTagListToggleList] = useState<Array<boolean>>(
    new Array(TAG_LIST.length).fill(false),
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId: string = event.currentTarget.id;

    const tagListIndex: number = TAG_LIST.findIndex((e) => e === buttonId);
    if (tagListIndex !== -1) {
      const oldToggle: boolean = tagListToggleList[tagListIndex];
      const newToggle: boolean = !oldToggle;
      const newTagListToggleList: Array<boolean> = tagListToggleList;
      newTagListToggleList[tagListIndex] = newToggle;

      setTagListToggleList(newTagListToggleList);

      if (newTagListToggleList.some((e) => e === true)) {
        const newTagList = TAG_LIST.filter(
          (value, index) => newTagListToggleList[index],
        );
        props.onTagListChanged(newTagList);
      } else {
        props.onTagListChanged([]);
      }
    }
  };

  return (
    <>
      {TAG_LIST.map((e, index) => (
        <button
          id={e}
          class={tagListToggleList[index] === true ? style.activeButton : ''}
          onClick={handleClick}
        >
          {e}
        </button>
      ))}
    </>
  );
}

function searchByGroupNameAndRandBySimilarity(
  searchContent: string,
): Array<GroupData> {
  interface GroupDataWithSimilarity extends GroupData {
    similarity: number;
  }

  const searchResult: Array<GroupDataWithSimilarity> = groupDataService
    .searchByGroupName(searchContent)
    .map((e) => ({
      ...e,
      similarity: stringSimilarity(e.groupName, searchContent, 1),
    }));

  // sort similarity by descending order
  return searchResult.sort((a, b) => b.similarity - a.similarity);
}

function GroupTable(props: {
  groupDataList: Array<GroupData>;
  onBoothInfoClicked: (groupId: string) => void;
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
              <button onClick={() => props.onBoothInfoClicked(e.groupId)}>
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

export default SearchModal;

import { TAG_LIST } from '../../data/TagList';
import { setGroupDataList } from '../global/GroupDataList';
import {
  closeSearchModal,
  useSearchModalState,
} from '../global/SearchModalState';
import { CURRENT_GROUP_DATA } from '../services/GroupDataService';
import * as mapRecordService from '../services/MapRecordService';
import { BoothActiveDay } from '../types/BoothActiveDay';
import { CURRENT_EVENT_TYPE } from '../types/EventType';
import { Filter } from '../types/Filter';
import { GroupData } from '../types/GroupData';
import { DropDownList } from './DropdownList';
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

  const [filter, setFilter] = useState<Filter>(Filter.noFilter);
  const [searchContent, setSearchContent] = useState<string | null>(null);
  const [activeTagList, setActiveTagList] = useState<Array<string>>([]);
  const [filteredGroupDataList, setFilteredGroupDataList] = useState<
    Array<GroupData>
  >([]);

  const filterOptionValueList: Array<{
    option: JSX.Element;
    value: Filter;
  }> = [
    {
      option: <>不篩選</>,
      value: Filter.noFilter,
    },
    {
      option: <>只擺一天</>,
      value: Filter.onlyOneDay,
    },
    {
      option: <>只顯示已標記</>,
      value: Filter.onlyMarked,
    },
  ];

  useEffect(() => {
    const filteredGroupDataList: Array<GroupData> =
      getCurrentGroupDataList(filter);

    let actualSearchContent = '';
    if (searchContent === null) {
      actualSearchContent = '';
    } else {
      actualSearchContent = searchContent;
    }

    const searchResult: Array<GroupData> = searchByGroupNameAndRankBySimilarity(
      filteredGroupDataList,
      actualSearchContent,
    );

    let searchResultFilteredByTag: Array<GroupData> = [];
    if (activeTagList.length === 0) {
      searchResultFilteredByTag = searchResult;
    } else {
      searchResultFilteredByTag = searchResult.filter((e) =>
        e.tagList.some((tag) => activeTagList.includes(tag)),
      );
    }

    setFilteredGroupDataList(searchResultFilteredByTag);
    setGroupDataList(searchResultFilteredByTag);
  }, [filter, searchContent, activeTagList]);

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
            <DropDownList
              tipText="天數篩選："
              value={filter}
              optionValue={filterOptionValueList}
              onChange={(filter: Filter) => {
                // FIXME: newActiveDay should be of type BoothActiveDay but is actually string
                const newFilterAsEnum = parseInt(filter as unknown as string);
                setFilter(newFilterAsEnum);
              }}
            />
          </div>
          <div>
            <details>
              <summary>標籤篩選</summary>
              <TagListToggle onTagListChanged={setActiveTagList} />
            </details>
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

function getCurrentGroupDataList(filter: Filter): Array<GroupData> {
  switch (filter) {
    case Filter.noFilter:
      return CURRENT_GROUP_DATA;
    case Filter.onlyOneDay:
      return CURRENT_GROUP_DATA.filter(
        (groupData) => groupData.boothList.length === 1,
      );
    case Filter.onlyMarked:
      // TODO: extract function
      return CURRENT_GROUP_DATA.filter(
        (groupData) =>
          mapRecordService.isGroupIdMarked(
            CURRENT_EVENT_TYPE,
            BoothActiveDay.day1,
            groupData.groupId,
          ) ||
          mapRecordService.isGroupIdMarked(
            CURRENT_EVENT_TYPE,
            BoothActiveDay.day2,
            groupData.groupId,
          ) ||
          mapRecordService.isGroupIdMarked(
            CURRENT_EVENT_TYPE,
            BoothActiveDay.day3,
            groupData.groupId,
          ),
      );
  }
}

function searchByGroupNameAndRankBySimilarity(
  groupDataList: Array<GroupData>,
  searchContent: string,
): Array<GroupData> {
  interface GroupDataWithSimilarity extends GroupData {
    similarity: number;
  }

  const lowerCaseSearchGroupName = searchContent.toLowerCase();
  const searchResult: Array<GroupDataWithSimilarity> = groupDataList
    .filter((e) => e.groupName.toLowerCase().includes(lowerCaseSearchGroupName))
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
          <th>資訊</th>
          <th>名稱</th>
          <th>連結</th>
        </tr>
      </thead>
      <tbody>
        {props.groupDataList.map((e) => (
          <tr key={e.groupId}>
            <td>
              <button onClick={() => props.onBoothInfoClicked(e.groupId)}>
                開啟
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

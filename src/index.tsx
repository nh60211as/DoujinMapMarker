import BoothModal from './components/BoothModal';
import { Header } from './components/Header';
import ReloadPrompt from './components/ReloadPrompt';
import SearchModal from './components/SearchModal';
import './index.css';
import { Home } from './pages/Home/index';
import * as browserSettingService from './services/BrowserSettingService';
import * as mapRecordService from './services/MapRecordService';
import { BoothActiveDay } from './types/BoothActiveDay';
import { CURRENT_EVENT_TYPE, EventType } from './types/EventType';
import { Filter } from './types/Filter';
import { DEFAULT_GROUP_DATA, GroupData } from './types/GroupData';
import { Marker } from './types/Marker';
import {
  DEFAULT_ZOOM_IN_VALUE,
  ValidZoomInValue,
  zoomInValueList,
} from './types/ZoomInValue';
import { JSX, render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { useState } from 'preact/hooks';

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  // BoothModal related
  const [isBoothModalOpen, setIsBoothModalOpen] = useState<boolean>(false);
  const [activeGroupData, setActiveGroupData] =
    useState<GroupData>(DEFAULT_GROUP_DATA);

  const [filter, setFilter] = useState<Filter>(Filter.noFilter);

  const [zoomInValue, setZoomInValue] = useState<ValidZoomInValue>(
    browserSettingService.getZoomInOrDefault(
      zoomInValueList,
      DEFAULT_ZOOM_IN_VALUE,
    ),
  );

  // SearchModal related
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  function onBoothInfoClicked(groupData: GroupData) {
    setActiveGroupData(groupData);
    setIsBoothModalOpen(true);
  }

  function getHomeComponent(): JSX.Element {
    return (
      <Home
        activeDay={activeDay}
        zoomInValue={zoomInValue}
        filter={filter}
        onBoothInfoClicked={onBoothInfoClicked}
      />
    );
  }

  return (
    <LocationProvider>
      <ReloadPrompt />
      <Header
        onActiveDayChange={setActiveDay}
        currentZoomInValue={zoomInValue}
        onZoomInValueChange={setZoomInValue}
        onFilterChange={setFilter}
        onSearchButtonClicked={() => setIsSearchModalOpen(true)}
      />
      <main>
        <Router>
          <Route path={`/`} component={getHomeComponent} />
          <Route default component={getHomeComponent} />
        </Router>
      </main>
      {isSearchModalOpen && (
        <SearchModal
          onClose={() => setIsSearchModalOpen(false)}
          onBoothInfoClicked={onBoothInfoClicked}
        />
      )}
      {isBoothModalOpen && (
        <BoothModal
          groupData={activeGroupData}
          currentActiveDay={activeDay}
          onClose={() => setIsBoothModalOpen(false)}
          onMarkerSet={(activeDay: BoothActiveDay, marker: Marker) => {
            mapRecordService.setMarker(
              CURRENT_EVENT_TYPE,
              activeDay,
              activeGroupData.groupId,
              marker,
            );
          }}
        />
      )}
    </LocationProvider>
  );
}

render(<App />, document.body);

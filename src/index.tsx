import BoothModal from './components/BoothModal';
import { Header } from './components/Header';
import ReloadPrompt from './components/ReloadPrompt';
import SearchModal from './components/SearchModal';
import { openBoothModal } from './global/BoothModalState';
import { openSearchModal } from './global/SearchModalState';
import './index.css';
import { Home } from './pages/Home/index';
import * as browserSettingService from './services/BrowserSettingService';
import * as mapRecordService from './services/MapRecordService';
import { BoothActiveDay } from './types/BoothActiveDay';
import { CURRENT_EVENT_TYPE } from './types/EventType';
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
    mapRecordService.getActiveDayOrDefault(CURRENT_EVENT_TYPE),
  );

  const [zoomInValue, setZoomInValue] = useState<ValidZoomInValue>(
    browserSettingService.getZoomInOrDefault(
      zoomInValueList,
      DEFAULT_ZOOM_IN_VALUE,
    ),
  );

  // SearchModal related
  function onBoothInfoClicked(groupId: string) {
    openBoothModal(groupId);
  }

  function getHomeComponent(): JSX.Element {
    return (
      <Home
        activeDay={activeDay}
        zoomInValue={zoomInValue}
        onBoothInfoClicked={onBoothInfoClicked}
      />
    );
  }

  function getModalComponents(): JSX.Element {
    return (
      <>
        <SearchModal onBoothInfoClicked={onBoothInfoClicked} />
        <BoothModal
          currentActiveDay={activeDay}
          onMarkerSet={(
            groupId: string,
            activeDay: BoothActiveDay,
            marker: Marker,
          ) => {
            mapRecordService.setMarker(
              CURRENT_EVENT_TYPE,
              activeDay,
              groupId,
              marker,
            );
          }}
        />
      </>
    );
  }

  return (
    <LocationProvider>
      <ReloadPrompt />
      {getModalComponents()}
      <Header
        onActiveDayChange={setActiveDay}
        currentZoomInValue={zoomInValue}
        onZoomInValueChange={setZoomInValue}
        onSearchButtonClicked={() => {
          openSearchModal();
        }}
      />
      <main>
        <Router>
          <Route path={`/`} component={getHomeComponent} />
          <Route default component={getHomeComponent} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

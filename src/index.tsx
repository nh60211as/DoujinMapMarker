import { Header } from './components/Header';
import ReloadPrompt from './components/ReloadPrompt';
import { SearchModal } from './components/SearchModal';
import './index.css';
import { Home } from './pages/Home/index';
import * as browserSettingService from './services/BrowserSettingService';
import * as mapRecordService from './services/MapRecordService';
import { BoothActiveDay } from './types/BoothActiveDay';
import { EventType } from './types/EventType';
import { Filter } from './types/Filter';
import {
  DEFAULT_ZOOM_IN_VALUE,
  ValidZoomInValue,
  zoomInValueList,
} from './types/ZoomInValue';
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { useState } from 'preact/hooks';

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  const [filter, setFilter] = useState<Filter>(Filter.noFilter);

  const [zoomInValue, setZoomInValue] = useState<ValidZoomInValue>(
    browserSettingService.getZoomInOrDefault(
      zoomInValueList,
      DEFAULT_ZOOM_IN_VALUE,
    ),
  );

  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);

  return (
    <LocationProvider>
      <ReloadPrompt />
      <SearchModal
        openModal={openSearchModal}
        onModalClose={() => setOpenSearchModal(false)}
        onBoothInfoClicked={() => {}}
      />
      <Header
        onActiveDayChange={setActiveDay}
        currentZoomInValue={zoomInValue}
        onZoomInValueChange={setZoomInValue}
        onFilterChange={setFilter}
        onSearchButtonClicked={() => setOpenSearchModal(true)}
      />
      <main>
        <Router>
          <Route
            path={`/`}
            component={() => Home({ activeDay, zoomInValue, filter })}
          />
          <Route
            default
            component={() => Home({ activeDay, zoomInValue, filter })}
          />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

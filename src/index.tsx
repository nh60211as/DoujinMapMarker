import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index";
import { Header } from "./components/Header";
import { render } from "preact";
import { useState } from "preact/hooks";
import * as mapRecordService from "./services/MapRecordService";
import * as browserSettingService from "./services/BrowserSettingService";
import { EventType } from "./types/EventType";
import ReloadPrompt from "./components/ReloadPrompt";
import { BoothActiveDay } from "./types/BoothActiveDay";
import {
  DEFAULT_ZOOM_IN_VALUE,
  ValidZoomInValue,
  zoomInValueList,
} from "./types/ZoomInValue";
import { Filter } from "./types/Filter";
import { SearchModal } from "./components/SearchModal";

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
        onSearchContentChange={(content: string) => {}}
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

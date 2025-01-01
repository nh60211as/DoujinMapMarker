import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index";
import { Header } from "./components/Header";
import "./index.css";
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

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  const [zoomInValue, setZoomInValue] = useState<ValidZoomInValue>(
    browserSettingService.getZoomInOrDefault(
      zoomInValueList,
      DEFAULT_ZOOM_IN_VALUE,
    ),
  );

  return (
    <LocationProvider>
      <ReloadPrompt />
      <Header
        onActiveDayChange={setActiveDay}
        currentZoomInValue={zoomInValue}
        onZoomInValueChange={setZoomInValue}
      />
      <main>
        <Router>
          <Route
            path={`/`}
            component={() => Home({ activeDay, zoomInValue })}
          />
          <Route default component={() => Home({ activeDay, zoomInValue })} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

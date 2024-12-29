import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { Header } from "./components/Header.js";
import "./index.css";
import { render } from "preact";
import { useState } from "preact/hooks";
import * as mapRecordService from "./services/MapRecordService";
import { BoothActiveDay } from "./types/MapData.js";
import { EventType } from "./types/EventType.js";

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  return (
    <LocationProvider>
      <Header onActiveDayChange={setActiveDay} />
      <main>
        <Router>
          <Route path={`/`} component={() => Home({ activeDay })} />
          <Route default component={() => Home({ activeDay })} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

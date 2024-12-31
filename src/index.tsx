import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { Header } from "./components/Header.js";
import "./index.css";
import { render } from "preact";
import { useState } from "preact/hooks";
import * as mapRecordService from "./services/MapRecordService";
import { EventType } from "./types/EventType.js";
import ReloadPrompt from "./components/ReloadPrompt.js";
import { BoothActiveDay } from "./types/BoothActiveDay.js";

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  return (
    <LocationProvider>
      <ReloadPrompt />
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

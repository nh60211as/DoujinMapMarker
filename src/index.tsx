import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index";
import { Header } from "./components/Header";
import "./index.css";
import { JSX, render } from "preact";
import { useState } from "preact/hooks";
import * as mapRecordService from "./services/MapRecordService";
import { BoothActiveDay, DEFAULT_MAP_DATA, MapData } from "./types/MapData";
import { CURRENT_EVENT_TYPE, EventType } from "./types/EventType";
import { BoothDialog } from "./components/BoothDialog";
import { Marker } from "./types/Marker";

export function App() {
  const [activeDay, setActiveDay] = useState<BoothActiveDay>(
    mapRecordService.getActiveDayOrDefault(EventType.FF44, BoothActiveDay.day1),
  );

  // BoothDialog related
  const [openBoothDialog, setOpenBoothDialog] = useState<boolean>(false);
  const [activeBoothMapData, setActiveBoothMapData] =
    useState<MapData>(DEFAULT_MAP_DATA);

  function createHomeComponent(): JSX.Element {
    return (
      <Home
        activeDay={activeDay}
        onTargetBoxClicked={(e) => {
          console.log("e", e);
          setActiveBoothMapData(e);
          setOpenBoothDialog(true);
        }}
      />
    );
  }

  return (
    <LocationProvider>
      <BoothDialog
        mapData={activeBoothMapData}
        openDialog={openBoothDialog}
        closeDialog={() => setOpenBoothDialog(false)}
        setMarker={(marker: Marker) => {
          mapRecordService.setMarker(
            CURRENT_EVENT_TYPE,
            activeDay,
            activeBoothMapData.id,
            marker,
          );
        }}
      />
      <Header onActiveDayChange={setActiveDay} />
      <main>
        <Router>
          <Route path={`/`} component={createHomeComponent} />
          <Route default component={createHomeComponent} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

import BoothModal from './components/BoothModal';
import { Header } from './components/Header';
import ReloadPrompt from './components/ReloadPrompt';
import SearchModal from './components/SearchModal';
import { openBoothModal } from './global/BoothModalState';
import { openSearchModal } from './global/SearchModalState';
import './index.css';
import { Home } from './pages/Home/index';
import * as mapRecordService from './services/MapRecordService';
import { BoothActiveDay } from './types/BoothActiveDay';
import { Marker } from './types/Marker';
import { JSX, render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

export function App() {
  // SearchModal related
  function onBoothInfoClicked(groupId: string) {
    openBoothModal(groupId);
  }

  function getHomeComponent(): JSX.Element {
    return <Home onBoothInfoClicked={onBoothInfoClicked} />;
  }

  function getModalComponents(): JSX.Element {
    return (
      <>
        <SearchModal onBoothInfoClicked={onBoothInfoClicked} />
        <BoothModal
          onMarkerSet={(
            groupId: string,
            activeDay: BoothActiveDay,
            marker: Marker,
          ) => {
            mapRecordService.setMarker(activeDay, groupId, marker);
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

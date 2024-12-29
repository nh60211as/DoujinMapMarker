import {
  LocationProvider,
  Router,
  Route,
} from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import { Header } from "./components/Header.js";
import "./index.css";
import { render } from "preact";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path={`/`} component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

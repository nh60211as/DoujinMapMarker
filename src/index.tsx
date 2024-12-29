import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
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
          <Route default component={Home} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.body);

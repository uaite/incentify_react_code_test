import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Planets from "./Planets";
import Ships from "./Ships";
import Films from "./Films";

function App() {
  return (
    <Router>
      <div>
        <nav className="navigation-bar">
          <ul>
            <li>
              <Link to="/">Films</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/ships">Ships</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/ships">
          <Ships />
        </Route>
        <Route path="/">
          <Films />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

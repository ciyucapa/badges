import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Badge from "../pages/badge";
import BadgeNew from "../pages/badgeNew";
import Error from "../pages/error";
import Home from '../pages/home';

const App = () => {
    return (
      <Router>
          <Switch>
              <Route exact path="/" components={Home} />
              <Route exact path="/badges" components={Badge} />
              <Route exact path="/badges/new" components={BadgeNew} />
              <Route exact path="/error" components={Error} />
          </Switch>
      </Router>
    );
};

export default App;

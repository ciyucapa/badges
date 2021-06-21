import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Badge from "../pages/badge";
import BadgeNew from "../pages/badgeNew";
import Error from "../pages/error";
import Home from '../pages/home';
import Layout from "../components/layout";

const App = () => (
      <Router>
          <Layout>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/badges" component={Badge} />
                  <Route exact path="/badges/new" component={BadgeNew} />
                  <Route path="/error" component={Error} />
              </Switch>
          </Layout>
      </Router>
);

export default App;

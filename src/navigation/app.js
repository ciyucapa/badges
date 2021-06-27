import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import Error from '../pages/error';
import Home from '../pages/home';
import Layout from '../components/layout';

const App = () => (
      <Router>
          <Layout>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/error" component={Error} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
              </Switch>
          </Layout>
      </Router>
);

export default App;

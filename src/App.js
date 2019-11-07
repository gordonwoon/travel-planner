import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Planner from './components/planner';

const App = () => {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/planner" component={Planner} />
        </Switch>
      </Navigation>
    </Router>
  );
}


export default App;
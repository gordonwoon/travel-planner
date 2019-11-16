import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Planner from './components/planner';

import keys from './config/keys';

const client = new ApolloClient({
  uri: `${keys.serverURL}/graphql`
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/planner/:id" component={Planner} />
          </Switch>
        </Navigation>
      </Router>
    </ApolloProvider>
  );
}


export default App;

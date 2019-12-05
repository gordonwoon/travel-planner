import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navigation from './components/navigation';
import Destination from './components/destination';
import Places from './components/places';

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
            <Route exact path="/" component={Destination} />
            <Route path="/places/:id" component={Places} />
          </Switch>
        </Navigation>
      </Router>
    </ApolloProvider>
  );
}


export default App;

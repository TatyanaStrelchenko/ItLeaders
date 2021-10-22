import React from 'react';
import { Button } from 'antd';
import graphql from 'babel-plugin-relay/macro';
import './App.css';

import {
  usePreloadedQuery,
  RelayEnvironmentProvider,
  loadQuery,
  PreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';
import Sponsors from './components/Sponsors';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    user(login: "M0nica") {
      sponsors {
        totalCount
      }
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

interface AppProps {
  preloadedQuery: PreloadedQuery<AppRepositoryNameQuery>;
}

function App(props: AppProps) {
  const { user } = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        {console.log('user', user)}
        <p>{user?.sponsors.totalCount} sponsors</p>
        <Button type="primary">Button</Button>
        <a href="/" className="App-link">
          Learn React
        </a>
        <Sponsors />
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;

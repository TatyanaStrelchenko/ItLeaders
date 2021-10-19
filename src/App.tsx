import React from 'react';
import './App.css';
import { Button } from 'antd';
import graphql from 'babel-plugin-relay/macro';

import {
  usePreloadedQuery,
  RelayEnvironmentProvider,
  loadQuery,
  PreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
      owner {
        id
      }
      createdAt
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
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository?.name}</p>
        <Button type="primary">Button</Button>
        test
        <h1>Test</h1>
        <h2>test2</h2>
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

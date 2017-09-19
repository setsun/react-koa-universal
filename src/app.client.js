import React from 'react';
import {hydrate} from 'react-dom';

import {QueryRenderer, graphql} from 'react-relay';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';

import {createStore} from 'redux'
import rootReducer from 'data/rootReducer';

import {BrowserRouter} from 'react-router-dom';

import theme from 'style/theme';

import AppContainer from 'containers/AppContainer';
import AppProvider from 'providers/AppProvider';

import registerServiceWorker from 'utils/registerServiceWorker';

const initialState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, initialState);

const modernEnvironment = new Environment({
  network: Network.create((
    operation,
    variables,
  ) => {
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }),
  store: new Store(new RecordSource()),
});

hydrate(
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query appQuery {
        viewer {
          ...TodoApp_viewer
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      return (
        <AppProvider store={store} theme={theme} locale="en">
          <BrowserRouter>
            <AppContainer />
          </BrowserRouter>
        </AppProvider>
      );
    }}
  />,
  document.getElementById("root")
);

registerServiceWorker();

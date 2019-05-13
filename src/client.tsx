import * as React from 'react';
import { hydrate } from 'react-dom';

import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import theme from './style/theme';

import App from './components/App';
import Provider from './components/Provider';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from([]),
  connectToDevTools: true,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <Provider client={client} theme={theme}>
    <App />
  </Provider>,
  document.getElementById('root')
);

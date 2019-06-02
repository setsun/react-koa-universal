import * as React from 'react';
import { hydrate } from 'react-dom';

import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';
import Provider from './components/Provider';

declare var window: {
  __APOLLO_STATE__: any;
};

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from([]),
  connectToDevTools: true,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <Provider client={client}>
    <App />
  </Provider>,
  document.getElementById('root')
);

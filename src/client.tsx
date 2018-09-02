declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import theme from './style/theme';

import AppProvider from './providers/AppProvider';
import AppContainer from './containers/AppContainer';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from([]),
  connectToDevTools: true,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <AppProvider client={client} theme={theme} locale="en">
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);

import React from 'react';
import {hydrate} from 'react-dom';

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

hydrate(
  <AppProvider store={store} theme={theme} locale="en">
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

registerServiceWorker();

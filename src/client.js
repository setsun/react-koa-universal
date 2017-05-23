import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './data/rootReducer';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/Routes';

import {ThemeProvider} from 'styled-components';
import theme from './style/theme';

const initialState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, initialState);

render((
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
), document.getElementById('root'));

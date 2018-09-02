import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import theme from './style/theme';

import AppContainer from './containers/AppContainer';
import AppProvider from './providers/AppProvider';

hydrate(
  <AppProvider theme={theme} locale="en">
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);

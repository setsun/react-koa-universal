import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from '@reach/router';

import theme from 'style/theme';

import AppContainer from 'containers/AppContainer';
import AppProvider from 'providers/AppProvider';

hydrate(
  <AppProvider theme={theme} locale="en">
    <Router>
      <AppContainer />
    </Router>
  </AppProvider>,
  document.getElementById('root')
);

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

const AppProvider = ({ children, theme, locale, store }) => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale="en">
        <Provider store={store}>{children}</Provider>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default AppProvider;

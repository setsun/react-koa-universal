import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

const AppProvider = ({ children, theme, locale }) => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale="en">{children}</IntlProvider>
    </ThemeProvider>
  );
};

export default AppProvider;

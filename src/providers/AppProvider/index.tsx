import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

const AppProvider = ({ client, theme, locale, children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale}>{children}</IntlProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppProvider;

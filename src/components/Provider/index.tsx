import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

const Provider = ({ client, theme, children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Provider;

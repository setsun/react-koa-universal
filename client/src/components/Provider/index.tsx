import * as React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createTheming } from '@callstack/react-theme-provider';
import theme from '../../style/theme';
import createGlobalStyle from '../../style/createGlobalStyle';

createGlobalStyle();

const { ThemeProvider } = createTheming(theme);

const Provider = ({
  client,
  children
}: {
  client: ApolloClient<any>;
  children: React.ReactNode;
}) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Provider;

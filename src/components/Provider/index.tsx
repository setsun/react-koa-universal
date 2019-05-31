import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

const Provider = ({ client, children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default Provider;

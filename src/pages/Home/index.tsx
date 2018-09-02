import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const TextCenter = styled.div`
  text-align: center;
`;

const Home = () => (
  <TextCenter>
    <h2>
      <FormattedMessage
        id="index.header"
        defaultMessage="React Apollo Starter"
      />
    </h2>
    <FormattedMessage
      id="index.message"
      defaultMessage="To get started, edit {fileName} and save to reload."
      values={{
        fileName: <code>src/client.tsx</code>,
      }}
    />
  </TextCenter>
);

export default Home;

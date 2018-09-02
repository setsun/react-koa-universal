import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const TextCenter = styled.div`
  text-align: center;
`;

const NotFound = ({ location }) => (
  <TextCenter>
    <h2>
      <FormattedMessage id="notfound.header" defaultMessage="Not Found" />
    </h2>
    <FormattedMessage
      id="notfound.message"
      defaultMessage="Looks like you've hit a dead end. {pathname} doesn't go anywhere."
      values={{
        pathname: location.pathname,
      }}
    />
  </TextCenter>
);

export default NotFound;

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const TextCenter = styled.div`text-align: center;`;

const NotFoundContainer = () => {
  return (
    <TextCenter>
      <h2>
        <FormattedMessage id="notFound.header" defaultMessage="404" />
      </h2>
      <FormattedMessage
        id="notFound.message"
        defaultMessage="You've taken a wrong turn, but it's not too late to turn back!"
      />
    </TextCenter>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundContainer);

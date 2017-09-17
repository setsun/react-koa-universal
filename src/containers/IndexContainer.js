import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {FormattedMessage} from 'react-intl';

const TextCenter = styled.div`
  text-align: center;
`;

const IndexContainer = () => {
  return (
    <TextCenter>
      <h2>
        <FormattedMessage
          id='index.header'
          defaultMessage='React Relay Starter'
        />
      </h2>
      <FormattedMessage
        id='index.message'
        defaultMessage='To get started, edit {fileName} and save to reload.'
        values={{
          fileName: <code>src/app.client.js</code>
        }}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);

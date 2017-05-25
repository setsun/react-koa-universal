import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const TextCenter = styled.div`
  text-align: center;
`;

const IndexContainer = () => {
  return (
    <TextCenter>
      <h2>React Koa Starter</h2>
      To get started, edit <code>src/App.js</code> and save to reload.
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

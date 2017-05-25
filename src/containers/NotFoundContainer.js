import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const TextCenter = styled.div`
  text-align: center;
`;

const NotFoundContainer = () => {
  return (
    <TextCenter>
      <h2>404</h2>
      You've taken a wrong turn, but it's not too late to turn back!
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
)(NotFoundContainer);

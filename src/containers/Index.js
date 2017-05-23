import React, { Component } from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  font-size: large;
`;

const AppContainer = styled.div`
  text-align: center;
`;

export default class Index extends Component {
  render() {
    return (
      <AppContainer>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </AppContainer>
    );
  }
}

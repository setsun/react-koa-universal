import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </div>
    );
  }
}

export default App;

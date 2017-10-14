import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App from './App';

class Test extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('tigerhacks', () => Test);

export default Test;

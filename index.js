import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Main from './src/components/Main/Main';

class Test extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('tigerhacks', () => Test);

export default Test;

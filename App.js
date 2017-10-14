import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Main from './src/components/Main/Main';
import { API_URL } from 'react-native-dotenv';

class App extends Component {
  render() {
    const networkInterface = createNetworkInterface({
      uri: API_URL
    });

    const client = new ApolloClient({
      networkInterface: networkInterface
    });

    return(
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    )
  }
};

export default App;

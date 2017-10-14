import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import StyledHeader from '../Common/StyledHeader';

class Article extends Component {
  onDismiss = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { article } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StyledHeader
          title={article.header}
          isInModal={true}
          onDismiss={this.onDismiss}
        />
        <ScrollView style={styles.container}>
          <Text>
            {article.content}
          </Text>
        </ScrollView>
      </View>
    )
  }
};

const styles = {
  container: {
    flex: 1,
    alignSelf: "center",
    width: "100%"
  },
};

export default Article;

import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import StyledHeader from '../Common/StyledHeader';
import ArticleListItem from './ArticleListItem';

class ArticleList extends Component {
  getCategory = () => {
    return this.props.navigation.state.params.category;
  };

  onDismiss = () => {
    this.props.navigation.goBack();
  };

  onItemPress = article => {
    this.props.navigation.navigate("Article", { article: article });
  };

  render() {
    const testArticle = {
      id: "2",
      header: "Donny sucks",
      content: "Really bad"
    }
    return(
      <View>
        <StyledHeader
          title={this.getCategory()}
          isInModal={true}
          onDismiss={this.onDismiss}
        />
        <ScrollView>
          <ArticleListItem
            title="Important Article"
            onPress={_ => this.onItemPress(testArticle)}
          />
        </ScrollView>
      </View>
    )
  }
}

export default ArticleList;

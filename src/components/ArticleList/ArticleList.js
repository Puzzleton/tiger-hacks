import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Spinner, Container, List } from 'native-base';
import StyledHeader from '../Common/StyledHeader';
import ArticleListItem from './ArticleListItem';
import { compose, graphql } from 'react-apollo';
import { getArticles } from './queries';

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

  getArticleListItem = (article) => {
    return (
      <ArticleListItem
        key={article.id}
        title={article.header}
        onPress={_ => this.onItemPress(article)}
      />
    )
  };

  render() {
    const { loading, articles } = this.props.data;

    if(loading) {
      return(
        <Container style={styles.spinner}>
          <Spinner />
        </Container>
      )
    } else {
      return(
        <View style={styles.container}>
          <StyledHeader
            title={this.getCategory()}
            isInModal={true}
            onDismiss={this.onDismiss}
          />
          <ScrollView>
            <List>
              {articles.map(this.getArticleListItem)}
            </List>
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = {
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    alignSelf: "center",
    width: "100%"
  },
};

export default compose(
  graphql(getArticles, {
    options: ({ navigation }) => ({
      variables: { category: navigation.state.params.category }
    })
  })
)(ArticleList);

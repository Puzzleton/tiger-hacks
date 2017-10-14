import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CategoryList from '../CategoryList/CategoryList';
import ArticleList from '../ArticleList/ArticleList';
import Article from '../Article/Article';

class Main extends Component {
  getRoutes() {
    return {
      CategoryList: { screen: CategoryList, path: "category" },

      ArticleList: { screen: ArticleList, path: "category/:category" },
      Article: { screen: Article, path: "category/:category/article/:article" },
    };
  }

  getOptions() {
    return {
      initialRouteName: "CategoryList",
      headerMode: "none",
      cardStyle: { backgroundColor: "#fff" }
    };
  }

  render() {
    const Navigation = StackNavigator(this.getRoutes(), this.getOptions());

    const screenProps = {
      rootNavigation: this.props.navigation
    };

    return <Navigation screenProps={screenProps} />;
  }
};

export default Main;

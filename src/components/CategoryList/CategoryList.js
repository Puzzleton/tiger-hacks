import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'native-base';
import { Left, Body, Right, Button, Icon, Header, Text } from 'native-base';
import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
  onItemPress = category => {
    this.props.navigation.navigate("ArticleList", { category: category });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Body style={styles.headerBody}>
            <Icon name='checkmark' style={styles.icon} />
            <Text style={styles.title}>Mark-Off News</Text>
          </Body>
        </Header>

        <ScrollView>
          <List>
            <CategoryListItem
              title="Politics"
              onPress={_ => this.onItemPress("Politics")}
            />
            <CategoryListItem
              title="Sports"
              onPress={_ => this.onItemPress("Sports")}
            />
            <CategoryListItem
              title="Technology"
              onPress={_ => this.onItemPress("Technology")}
            />
            <CategoryListItem title="Weather" />
            <CategoryListItem title="Media" />
            <CategoryListItem title="Government" />
          </List>
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

  header: {
    backgroundColor: "white"
  },

  headerBody: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  icon: {
    fontSize: 40,
    color: "red",
    marginRight: 7
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  }

};

export default CategoryList;

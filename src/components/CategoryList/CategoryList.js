import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'native-base';
import { Left, Body, Right, Button, Icon, Header, Title } from 'native-base';
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
            <Title style={styles.title}>Mark-Off News</Title>
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
            <View style={styles.disabled}>
              <CategoryListItem title="Technology" disabled />
            </View>
            <View style={styles.disabled}>
              <CategoryListItem disabled title="Weather" />
            </View>
            <View style={styles.disabled}>
              <CategoryListItem disabled title="Media" />
            </View>
            <View style={styles.disabled}>
              <CategoryListItem disabled title="Government" />
            </View>
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
    backgroundColor: "#EEEEEE"
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
    marginRight: 7,
    fontWeight: "bold"
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    fontFamily: "Futura-Medium"
  },

  disabled: {
    backgroundColor: "#EEEEEE"
  }

};

export default CategoryList;

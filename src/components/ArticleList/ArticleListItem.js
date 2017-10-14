import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Text, Button, Icon } from 'native-base';
import { PropTypes } from 'prop-types';

class ArticleListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
  }

  render() {
    return (
      <ListItem onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Icon name="arrow-forward" style={styles.icon}/>
      </ListItem>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "flex-start"
  },

  text: {
    fontSize: 18,
    flex: 1
  },

  icon: {
    alignSelf: "flex-end",
    color: "black"
  }
}

export default ArticleListItem;

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Text, Button, Icon } from 'native-base';
import { PropTypes } from 'prop-types';

class CategoryListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
  }

  render() {
    return (
      <ListItem
        onPress={this.props.onPress}
        style={this.props.disabled ? styles.disabled : styles.container}
      >
        <Text style={this.props.disabled ? styles.disabledText : styles.text}>
          {this.props.title}
        </Text>
        <Icon
          name="arrow-forward"
          style={this.props.disabled ? styles.disabledIcon : styles.icon}/>
      </ListItem>
    )
  }
}

const styles = {
  disabled: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#EEEEEE"
  },

  disabledText: {
    fontSize: 18,
    flex: 1,
    fontFamily: "Didot-Italic",
    color: "#616161"
  },

  disabledIcon: {
    alignSelf: "flex-end",
    color: "#616161"
  },

  container: {
    flex: 1,
    alignItems: "flex-start"
  },

  text: {
    fontSize: 18,
    flex: 1,
    fontFamily: "Didot-Italic"
  },

  icon: {
    alignSelf: "flex-end",
    color: "black"
  }
}

export default CategoryListItem;

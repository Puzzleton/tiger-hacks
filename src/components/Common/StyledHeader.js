import React, { Component } from 'react';
import { Left, Body, Right, Button, Icon, Header, Text } from 'native-base';
import { PropTypes } from 'prop-types';

class StyledHeader extends Component {
  static propTypes = {
    isInModal: PropTypes.bool,
    title: PropTypes.string,
    onDismiss: PropTypes.func
  }

  getBack = () => {
    return (
      <Button transparent onPress={this.props.onDismiss}>
        <Icon style={styles.icon} name='arrow-back' />
      </Button>
    )
  };

  render() {
    return(
      <Header style={styles.head}>
        <Left style={styles.back}>
          {this.props.isInModal && this.getBack()}
        </Left>
        <Body style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
        </Body>
        <Right>

        </Right>
      </Header>
    )
  }
}

const styles = {
  head: {
    backgroundColor: "white",
  },
  
  header: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  },

  back: {
    alignSelf: "flex-start"
  },

  icon: {
    color: "black"
  }
}

export default StyledHeader;

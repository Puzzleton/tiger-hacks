import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Left, Body, Right, Button, Icon, Header, Title } from 'native-base';
import { PropTypes } from 'prop-types';

class StyledHeader extends Component {
  static propTypes = {
    isInModal: PropTypes.bool,
    title: PropTypes.string,
    onDismiss: PropTypes.func,
    icon: PropTypes.string,
    onPress: PropTypes.func
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
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon name={this.props.icon}/>
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }
}

const styles = {
  head: {
    backgroundColor: "#EEEEEE",
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
    fontSize: 18,
    color: "black",
    fontFamily: "Futura-Medium"
  },

  back: {
    alignSelf: "flex-start"
  },

  icon: {
    color: "black"
  }
}

export default StyledHeader;

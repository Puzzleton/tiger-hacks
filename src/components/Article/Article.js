import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Spinner, Container } from 'native-base';
import StyledHeader from '../Common/StyledHeader';

class Article extends Component {

  onDismiss = () => {
    this.props.navigation.goBack();
  };

  getSpinner = () => {
    return (
      <Container style={styles.spinner}>
        <Spinner />
      </Container>
    )
  };

  componentWillMount = () => {
    this.setState({loadingImage: true});
  }

  render() {
    const { article } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StyledHeader
          title={article.header}
          isInModal={true}
          onDismiss={this.onDismiss}
        />
        <View style={styles.content}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>{article.header.toUpperCase()}</Text>
          </View>
          <ScrollView style={styles.scroll}>
            <View style={styles.image}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{uri: article.image}}
                onLoadStart={_ => this.setState({loadingImage: true})}
                onLoad={_ => this.setState({loadingImage: false})}
              />
              {this.state.loadingImage && this.getSpinner()}
            </View>

            <Text style={styles.text}>
              {"\t" + article.content}
            </Text>
          </ScrollView>
        </View>
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

  content: {
    flex: 1,
    flexDirection: "column",
    width: "100%"
  },

  headlineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#0f0f0f"
  },

  headline: {
    fontSize: 32,
    fontFamily: "Didot",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: 200
  },

  scroll: {
    flex: 1,
    width: "100%"
  },

  text: {
    fontFamily: "AvenirNextCondensed-Regular",
    fontSize: 20
  },

  spinner: {
    position: 'relative',
    top: -100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default Article;

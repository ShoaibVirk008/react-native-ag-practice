import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> splash </Text>
      </View>
    );
  }
}

export default Splash;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Text> settings </Text>
      </View>
    );
  }
}

export default Settings;

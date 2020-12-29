import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        <Text> Profile </Text>
      </View>
    );
  }
}

export default Profile;

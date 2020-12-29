import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text> Signin </Text>
            </View>
        );
    }
}

export default Signin;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text
                    onPress={() => this.props.navigation.navigate('signin')}
                > Logout </Text>
            </View>
        );
    }
}

export default Home;

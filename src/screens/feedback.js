import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text> feedback </Text>
                <Text
                    onPress={() => this.props.navigation.toggleDrawer()}
                >Open Drawer</Text>
            </View>
        );
    }
}

export default Feedback;

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        headerTitle: '디테일'
    }
    render = () => {
        return (
            <View>
                <Text>Welcome to Detail Screen!</Text>
            </View>
        )
    }
}
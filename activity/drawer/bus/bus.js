import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { normalize } from 'react-native-elements';

export default class Bus extends Component {
    render = () => {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize: normalize(20)}}>Welcome to React Native!</Text>
            </View>
        )
    }
}
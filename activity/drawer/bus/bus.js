import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { normalize } from 'react-native-elements';

export default class Bus extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => {
        return {
            headerTitle: '순환버스',
        } 
    }

    render = () => {
        return (
            <TouchableOpacity 
                style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffffff'}}
                onPress={() => this.props.navigation.navigate("Detail")}
            >
                <Text style={{fontSize: normalize(20)}}>Welcome to React Native!</Text>
            </TouchableOpacity>
        )
    }
}
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
                style={{flex: 1, justifyContent:'center', alignItems:'center'}}
                onPress={() => this.props.navigation.navigate("HaksikMon")}
            >
                <Text style={{fontSize: normalize(20)}}>??????</Text>
            </TouchableOpacity>
        )
    }
}
import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class DetailMenu extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.navigation.state.params.item;
    }

    render () {
        return (
            <View>
                <Text>{this.item.name}</Text>
            </View>
        )
    }
}
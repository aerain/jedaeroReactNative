import React, { Component } from 'react'
import { View, Text,Image } from 'react-native';

export default class DetailMenu extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.navigation.state.params.item;
    }

    render () {
        return (
            <View>
                <View>
                    <Image 
                    style={{width:'100%', height:300, resizeMode: 'contain'}}
                    source={{uri:this.item.images}}/>
                </View>
                <View>
                    <Text>{this.item.name}</Text>
                    <Text>{this.item.images}</Text>
                </View>
                
            </View>
        )
    }
}
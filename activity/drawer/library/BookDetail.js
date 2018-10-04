import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class BookDetail extends Component {
    static navigationOptions = {
        title: '도서상세'
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
        <View>
            <Text> 입니다. </Text>
        </View>
        )
    }
}
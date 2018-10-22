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
            <View style={{flex: 1}}>
                <TouchableOpacity 
                    style={{width:'100%', height:100, justifyContent:'center', alignItems:'center', backgroundColor:'#f7f7f7', }}
                    onPress={() => this.props.navigation.navigate("HaksikMon")}
                >
                    <Text style={{fontSize: normalize(20)}}>오늘의 학식따리는 무엇인가?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{width:'100%', height:100, justifyContent:'center', alignItems:'center', backgroundColor:'#f7f7f7', }}
                    onPress={() => this.props.navigation.navigate('SmartCheck')}
                >
                    <Text style={{fontSize: normalize(20)}}>드리미를 들어가볼까요?</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
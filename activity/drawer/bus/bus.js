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
            <View style={{flex: 1, backgroundColor:'#f7f7f7'}}>
                <View style={{flex: 1,}}>
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
                <TouchableOpacity 
                    style={{paddingVertical:16, paddingHorizontal: 16, borderTopWidth:0.5, borderTopColor:'#d7d7d7', backgroundColor:'#34495599'}}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={{color:'#e7e7e7'}}>로그인 해주세요!!!</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
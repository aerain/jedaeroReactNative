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

    AuthenticationAutomation() {
        let uri = 'http://elearning.jejunu.ac.kr/MUser.do';
        let formdata = new FormData();
        formdata.append('cmd', 'loginUser');
        formdata.append('userDTO.userId', '2014108205');
        formdata.append('userDTO.password', 'gkrtnfqn1!');
        formdata.append('userDTO.localeKey', 'ko');
        fetch(uri, {
            'method':'POST',
            headers: {
                'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
            },
            body: formdata,
            mode: 'no-cors'
        }).then(response => console.log(response.headers['set-cookie']))
        .catch(err => console.log(err));
    }
    render = () => {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity 
                    style={{width:'100%', height:100, justifyContent:'center', alignItems:'center', backgroundColor:'#f7f7f7', }}
                    onPress={() => this.props.navigation.navigate("HaksikMon")}
                >
                    <Text style={{fontSize: normalize(20)}}>Welcome to React Native!</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{width:'100%', height:100, justifyContent:'center', alignItems:'center', backgroundColor:'#f7f7f7', }}
                    onPress={() => this.AuthenticationAutomation()}
                >
                    <Text style={{fontSize: normalize(20)}}>드리미를 들어가볼까요?</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
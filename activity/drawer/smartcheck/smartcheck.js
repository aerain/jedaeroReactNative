import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { normalize, Button } from 'react-native-elements';
import { libsearchStyles } from '../../jedaeroCSS';

export default class SmartCheck extends Component {
    static navigationOptions = {
        headerTitle: '스마트출결'
    }
    
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        }
    }

    AuthenticationAutomation(code) {
        let uri = 'http://elearning.jejunu.ac.kr';
        let formdata = new FormData();
        formdata.append('cmd', 'loginUser');
        formdata.append('userDTO.userId', '2014108205');
        formdata.append('userDTO.password', 'gkrtnfqn1!');
        formdata.append('userDTO.localeKey', 'ko');
        fetch(`${uri}/MUser.do`, {
            'method':'POST',
            headers: {
                'User-Agent': `Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36`,
            },
            body: formdata,
            mode: 'no-cors'
        }).then(response => response.headers)
        .then(headers => headers.map['set-cookie'])
        .then(cookie => {
            console.log(cookie);
            // fetch(`${uri}/MSmartatt.do`, {
            //     'method':'POST',
            //     'mode': 'no-cors',
            //     headers: {
            //         cookie
            //     }    
            // })
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder="코드를 입력해주세요"
                    style={libsearchStyles.textContainer}
                    onChangeText={code => this.setState({code})}
                />
                <Button
                    title="코드 입력"
                    onPress={() => {
                        if(this.state.search != '') {
                            this.AuthenticationAutomation(this.state.code);
                        }
                    }}
                    buttonStyle={{backgroundColor:'transparent', elevation:0, paddingVertical:16,}}
                    titleStyle={{color:'#344955', fontSize:normalize(16)}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    }
})
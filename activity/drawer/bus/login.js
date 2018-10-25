import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { normalize } from 'react-native-elements'

export default class Login extends Component {
    static navigationOptions = {
        title: '드리미 등록'
    }

    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>학번</Text>
                <TextInput 
                    placeholder="학번" style={{...styles.inputContainerStyle, marginBottom:48,}}
                    textContentType="username"
                    keyboardType="number-pad"
                    caretHidden={true}
                />
                <Text style={styles.textStyle}>비밀번호</Text>
                <TextInput 
                    placeholder="패스워드" 
                    style={styles.inputContainerStyle} 
                    textContentType="password"
                    keyboardType="default"
                    caretHidden={true}    
                    secureTextEntry={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:'#f7f7f7', paddingVertical: 32, paddingHorizontal: 32},
    textStyle: {fontSize: normalize(16)},
    inputContainerStyle: {width: '100%', marginVertical: 16, borderBottomWidth:1, borderBottomColor:'#d7d7d7', fontSize:normalize(18)},
})
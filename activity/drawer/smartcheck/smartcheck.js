import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { normalize, Button } from 'react-native-elements';
import { libsearchStyles } from '../../jedaeroCSS';
import SmartCheckAPI from '../../JedaeroAPI/SmartCheckAPI';

let identification = {
    id: '2014108205',
    pwd: 'gkrtnfqn1!',
}
export default class SmartCheck extends Component {
    static navigationOptions = {
        headerTitle: '스마트출결'
    }
    
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            emptyCookie: '',
        }

    }
    
    //authenticate = (id, code) => SmartCheckAPI.bind(this)(id, code);

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
                        if(this.state.code.trim() != '') {
                            // this.authenticate(identification, this.state.code);
                            SmartCheckAPI(identification, this.state.code);
                        } else {
                            Alert.alert('코드 입력좀 하세욘!');
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
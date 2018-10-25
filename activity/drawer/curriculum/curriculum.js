import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions } from '../../jedaeroCSS';

let identification = {
    id: '2014108205',
    pwd: 'gkrtnfqn1!',
}
class CurriCulumMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
        this.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    }
    
    encode64(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
     
        do {
           chr1 = input.charCodeAt(i++);
           chr2 = input.charCodeAt(i++);
           chr3 = input.charCodeAt(i++);
     
           enc1 = chr1 >> 2;
           enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
           enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
           enc4 = chr3 & 63;
     
           if (isNaN(chr2)) {
              enc3 = enc4 = 64;
           } else if (isNaN(chr3)) {
              enc4 = 64;
           }
     
           output = output + this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) + 
              this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
        } while (i < input.length);
        
        return output;
    }
    getCurriculum = async () => {
        let uri = 'http://dreamy.jejunu.ac.kr';
        let {id, pwd} = identification;
        let baseId = this.encode64(id);
        let basePwd = this.encode64(pwd);

        let formdata = new FormData();
        formdata.append('tmpu', baseId);
        formdata.append('tmpw', basePwd);
        formdata.append('mobile', '');
        formdata.append('app', '');
        formdata.append('z', 'Y');

        let emptyResponse = await fetch(uri + '/frame/index.do?dummy=');
        let emptyHeaders = await emptyResponse.headers;
        let emptyCookie = emptyHeaders.map['set-cookie'];

        let response = await fetch(`${uri}/frame/sysUser.do?next=`,{
            'method': 'POST',
            'body': JSON.stringify({

            }),
            'Host': 'dreamy.jejunu.ac.kr',
            'Connection': 'keep-alive',
            'Content-Length': '86',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Origin': 'http://dreamy.jejunu.ac.kr',
            'Upgrade-Insecure-Requests': '1',
            'DNT': '1',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Mobile Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Referer': 'http://dreamy.jejunu.ac.kr/frame/index.do',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'ko',
            'Cookie': emptyCookie,
        })

        let text = await response.headers();
        console.log(text);

    }

    componentDidMount = () => this.getCurriculum();
    render() {
        return(
            <View style={styles.container}>

            </View>
        )
    }
}

export default createStackNavigator({
    CurriCulumMain: {
        screen: CurriCulumMain,
        navigationOptions: {
            title: '수업시간표'
        }
    }
}, stackNavigationOptions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f7f7f7'
    }
})
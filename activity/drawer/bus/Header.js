import React, {Component } from 'react';
import {View , TouchableOpacity, Image } from 'react-native';

export default class Header extends Component{
    render() {
        return (
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                <Image style={{width:30, height:30, marginRight:15, marginTop:5}}
                    source={require('../../../images/share.png')}      
                 />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => {
                    console.log(navigation);
                    navigation.navigate('Detail');
                }}> 
                   <Image 
                    style={{width:30, height:32, marginRight:15, marginTop:5}}
                    source={require('../../../images/Info.png')}/>
                </TouchableOpacity>
                </View>
        )
    }
    
} 
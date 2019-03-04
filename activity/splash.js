import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,ActivityIndicator, ImageBackground, Animated } from 'react-native';


export default class splash extends Component {
    constructor(props) {
        super(props);

        this.state ={
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount = () => {
        Animated.timing(
            this.state.opacity,
            { toValue: 1, duration: 1500}
        ).start()
    }
    render = () => {
         
        return (
            <ImageBackground style={{flex:1, alignItems:"center", backgroundColor:"black",justifyContent:'center'}}
                source={require('../images/test.gif')}
            >
               <Animated.Image style={{...styles.box, opacity: this.state.opacity}}
                  source={require('../images/logo.png')}
                />
                <ActivityIndicator size="large" color="#FFFFFF"/>
            </ImageBackground>
        //   <ImageBackground
        //     source={require('../images/tumblr.gif')}
        //     style={{flex: 1}}
        //   >
        //     <Text>왜 안되냐고</Text>
        //   </ImageBackground>
               
           
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: "70%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 200,

    }
})
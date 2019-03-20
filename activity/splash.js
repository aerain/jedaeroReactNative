import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,ActivityIndicator, ImageBackground, Animated, Platform, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

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
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.reset({ index: 0 , actions: [
                NavigationActions.navigate({ routeName: 'mainTab'})
            ]}))
            // this.props.navigation.navigate("mainTab")
        }, 2800)
    }

    render = () => {
         
        return (
            <View style={styles.box}> 
                <ImageBackground style={styles.wrap}
                    source={require('../images/Splash_image.webp')}
                >
            <Animated.Image style={{...styles.logo, opacity: this.state.opacity}}
               source={require('../images/logo.png')}
            />
            <ActivityIndicator size="large" color="#FFFFFF" />
         </ImageBackground> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex:1, 
        backgroundColor:"black",
    },
    logo: {
        width: "70%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 200,

    },
    wrap: {
        height: "100%",
        alignItems:"center", 
        resizeMode: "cover", 
        justifyContent:'center', 
    },

    backgroundVideo: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})
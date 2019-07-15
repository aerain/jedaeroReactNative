import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,ActivityIndicator, ImageBackground, Animated, Platform, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import { normalize } from 'react-native-elements';
import { mainScreen } from '../activity/css/busStyle'
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
            { toValue: 1, duration: 2500}
        ).start()
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.reset({ index: 0 , actions: [
                NavigationActions.navigate({ routeName: 'mainTab'})
            ]}))
            // this.props.navigation.navigate("mainTab")
        }, 1000)
    }

    render = () => {
         
        return (
            <View style={styles.box}>
             
                <ImageBackground style={styles.wrap}
                    source={require('../images/jedaero_icon2.png')}
                >
                </ImageBackground> 
                {/* <ActivityIndicator style={{flex:1, backgroundColor:'#f8f7f3'}}size="large" color="#353866"/> */}
                <Text style={styles.title}>제대 컴공</Text>
                
                
                
              
                {/* <Animated.Image style={{...styles.logo, opacity: this.state.opacity}}
                source={require('../images/logo.png')}
                /> */}
               
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex:1, 
        backgroundColor:'#f8f7f3',
        alignContent: 'center'
    },
    logo: {
        width: "70%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 200,

    },
    wrap: {
        flex:4,
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
      
      title: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: '#274c5e',
        flex:1,
        backgroundColor:'#f8f7f3',
        textAlign:'center',
        marginTop: 40
      }
})
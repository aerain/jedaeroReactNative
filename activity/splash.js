import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,ActivityIndicator, ImageBackground, Animated} from 'react-native';
import Video from 'react-native-video'
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
            { toValue: 1, duration: 3000}
        ).start()
    }

    render = () => {
         
        return (
        <View style={styles.box}> 
        <ImageBackground style={styles.wrap}
            source={require('../images/home2.webp')}
         >
            <Animated.Image style={{...styles.logo, opacity: this.state.opacity}}
               source={require('../images/logo.png')}
            />
            <ActivityIndicator size="large" color="#FFFFFF" />
         </ImageBackground> 
         {/* <Video source={require('../images/ggue.mp4')}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo}>
             </Video>
                <Animated.Image style={{...styles.logo, opacity: this.state.opacity}}
                source={require('../images/logo.png')}
            />
                <ActivityIndicator size="large" color="#FFFFFF" /> */}
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
        resizeMode: "contain",
        marginBottom: 230,

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
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,ActivityIndicator} from 'react-native';


export default class splash extends Component {
    constructor(props) {
        super(props);

    }

    render = () => {
         
        return (
            <View style={{flex:1, width:"100%", height:"100%", alignItems:"center", backgroundColor:"black",}}>
               <Image style={styles.box}
                  source={require('../images/logo.png')}
                />
                <ActivityIndicator size="large" color="#FFFFFF"/>
            </View>
          
               
           
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: "70%",
        resizeMode: "contain",
        marginTop: -70

    }
})
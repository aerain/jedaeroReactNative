import React, { Component } from 'react'
import { Platform, StatusBar } from 'react-native'
import { createStackNavigator, SafeAreaView, } from 'react-navigation'
import splash from './splash';
import Info from './info';
import MainTabNavigation from './MainTabNavigation';


class MainTab extends Component {
    static router = MainTabNavigation.router;
    render() {
        return(
            <SafeAreaView style={{flex: 1, paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), backgroundColor: '#ffffff' }}>
                <MainTabNavigation navigation={this.props.navigation} />
            </SafeAreaView>
        )
    }
}

let navigator =  createStackNavigator({
    splash: {
        screen: splash
    },
    mainTab: {
        screen: MainTab
    },
    infoTab:{
        screen:Info
    }
}, {
    headerMode: 'none'
})



export default navigator;
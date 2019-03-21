import React, { Component } from 'react'
import { Platform, StatusBar, View ,Alert,} from 'react-native'
import { createStackNavigator, SafeAreaView, } from 'react-navigation'
import splash from './splash';
import Info from './info';
import MainTabNavigation from './MainTabNavigation';
import settingsStackNavigator from './drawer/settings/settingsStackNavigator';


let navigator = createStackNavigator({
    splash: {
        screen: splash
    },
    mainTab: {
        screen: (
            {navigation}) => (
            <SafeAreaView style={{flex: 1, 
                    paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), backgroundColor: '#ffffff' }} forceInset={{top: 'never', bottom: 'never'}}>
                <MainTabNavigation navigation={navigation} />
            </SafeAreaView>
        )
    },
    settings: {
        screen: settingsStackNavigator
    }
}, {
    headerMode: 'none'
})



export default navigator;
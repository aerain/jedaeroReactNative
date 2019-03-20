import React, { Component } from 'react'
import { Platform, StatusBar } from 'react-native'
import { createStackNavigator, SafeAreaView, } from 'react-navigation'
import splash from './splash';
import MainTabNavigation from './MainTabNavigation';

export default createStackNavigator({
    splash: {
        screen: splash
    },
    mainTab: {
        screen: ({navigation}) => (
            <SafeAreaView style={{flex: 1, paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), backgroundColor: '#ffffff' }}>
                <MainTabNavigation navigation={navigation} />
            </SafeAreaView>
        )
    }
}, {
    headerMode: 'none'
})
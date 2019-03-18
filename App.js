/**
 * 제대로 가자 for React Native
 * 작성자 - 이청길
 * 작성일 - 2018.07.26
 */

import React, { Component } from 'react';
import { StatusBar, Platform, View, Text, TextInput ,ActivityIndicator} from 'react-native';
import changeNavigationBarColor, { ShowNavigationBar } from 'react-native-navigation-bar-color'
import { SafeAreaView } from 'react-navigation';
import MainDrawer from './activity/MainTabNavigation';
import Splash from './activity/splash'
import SplashStackNavigator from './activity/SplashStackNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false //api를 불러왔을때는 true가 되도록
    }
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({ isLoaded: true})
    // }, 2800)
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor('#ffffff00');

    changeNavigationBarColor('#ffffff', true);
  }

  render() {
    const { isLoaded } = this.state;
    // if(!isLoaded) {
    //   if(Platform.OS === 'android') { StatusBar.setBackgroundColor('#ffffff00'); }
    //   StatusBar.setTranslucent(true);
    //   StatusBar.setBarStyle('light-content');
    // } else {
    //   if(Platform.OS === 'android') { StatusBar.setBackgroundColor('#ffffffff'); }
    //   StatusBar.setTranslucent(false);
    //   StatusBar.setBarStyle('dark-content');
    // }
    // return isLoaded ? <MainDrawer/> : <Splash />

    return <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}><SplashStackNavigator /></SafeAreaView>
  }
}


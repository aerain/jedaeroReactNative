/**
 * 제대로 가자 for React Native
 * 작성자 - 이청길
 * 작성일 - 2018.07.26
 */

import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MainDrawer from './activity/MainDrawerNavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if(Platform.OS === 'android') { StatusBar.setBackgroundColor('#344955'); }
    StatusBar.setBarStyle('light-content');
  }

  render = () => {  
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
        <MainDrawer /> 
      </SafeAreaView>
    );
  }
}

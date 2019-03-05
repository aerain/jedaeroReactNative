/**
 * 제대로 가자 for React Native
 * 작성자 - 이청길
 * 작성일 - 2018.07.26
 */

import React, { Component } from 'react';
import { StatusBar, Platform, View, Text, TextInput ,ActivityIndicator} from 'react-native';
// import { SafeAreaView } from 'react-navigation';
import MainDrawer from './activity/MainTabNavigation';
import Splash from './activity/splash'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false //api를 불러왔을때는 true가 되도록
    }
  }


  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoaded: true})
    }, 9500)
    if(Platform.OS === 'android') { StatusBar.setBackgroundColor('#ffffff'); }
    StatusBar.setBarStyle('dark-content');
   
  }

  render() {
    const { isLoaded } = this.state;
    return (
        <View style={{flex:1}}>
        {isLoaded ?   
          (
            <MainDrawer/>
          ) : (
              <Splash />
            )
        }
        </View>
    )
  }
}


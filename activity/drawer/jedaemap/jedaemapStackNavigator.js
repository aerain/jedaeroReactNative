import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions } from '../../jedaeroCSS';
import Jedaemap from './jedaemap';

export default createStackNavigator({
    Jedaemap: {
        screen: Jedaemap,
    }
    
}, stackNavigationOptions );
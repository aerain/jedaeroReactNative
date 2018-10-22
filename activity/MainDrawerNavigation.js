import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import { normalize } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import BusStack from './drawer/bus/BusStackNavigation';
import FoodStack from './drawer/food/FoodListStackNavigation';
import LibrarySearchStackNavigator from './drawer/library/LibrarySearchStackNavigator';
import Schedule from './drawer/schedule/Schedule';
import {mainTabOptions} from './jedaeroCSS';
import Icon from 'react-native-vector-icons';



export default createMaterialBottomTabNavigator({
    Bus: {
        screen: BusStack,
        navigationOptions: {
            title: '순환버스'
        }
    },
    Food: {
        screen: FoodStack,
        navigationOptions: {
            title: '뭐먹을까'
        }
    },
    ScheduleMain: {
        screen: Schedule,
        navigationOptions: {
            title: '학사일정'
        }
    },    
    LibrarySearch: {
        screen: LibrarySearchStackNavigator,
        navigationOptions: {
            title: '도서검색'
        }
    }
}, mainTabOptions)
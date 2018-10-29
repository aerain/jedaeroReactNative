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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BusSc from './drawer/bus2/BusStackNavigation';


export default createMaterialBottomTabNavigator({
    Bus: {
        screen: BusStack,
        navigationOptions: {
            title: '순환버스',
            tabBarIcon: ({tintColor}) => (<Icon name="bus" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    },
    Food: {
        screen: FoodStack,
        navigationOptions: {
            title: '뭐먹을까',
            tabBarIcon: ({tintColor}) => (<Icon name="food-fork-drink" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    },
    ScheduleMain: {
        screen: Schedule,
        navigationOptions: {
            title: '학사일정',
            tabBarIcon: ({tintColor}) => (<Icon name="clipboard-outline" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    },    
    LibrarySearch: {
        screen: LibrarySearchStackNavigator,
        navigationOptions: {
            title: '도서검색',
            tabBarIcon: ({tintColor}) => (<Icon name="library" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    },
    BusSchedule:{
        screen: BusSc,
        navigationOptions:{
            title: '버스버스잼',
            tabBarIcon: ({tintColor}) => (<Icon name="library" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    }
}, mainTabOptions)
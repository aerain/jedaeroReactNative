import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { StackActions, NavigationActions } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import BusStack from './drawer/bus/BusStackNavigation';
import FoodStack from './drawer/food/FoodListStackNavigation';
import LibrarySearchStackNavigator from './drawer/library/LibrarySearchStackNavigator';
import Schedule from './drawer/schedule/Schedule';
import {mainTabOptions} from './jedaeroCSS';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import BusSc from './drawer/bus2/BusStackNavigation';
import SmartCheck from './drawer/smartcheck/smartcheck';


const TabNav = createBottomTabNavigator({
    Bus: {
        screen: BusStack,
        navigationOptions: {
            title: '순환버스',
            tabBarIcon: ({tintColor}) => (<Icon name="home-outline" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
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
            tabBarIcon: ({tintColor}) => (<Icon name="book-open-variant" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
        }
    },
    // BusSchedule:{
    //     screen: BusSc,
    //     navigationOptions:{
    //         title: '버스버스잼',
    //         tabBarIcon: ({tintColor}) => (<Icon name="bus" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
    //     }
    // },
    // SmartCheck:{
    //     screen: SmartCheck,
    //     navigationOptions:{
    //         title: '스마트출결',
    //         tabBarIcon: ({tintColor}) => (<Icon name="clock" color={tintColor} size={35} style={{width: 35, height: 35}}/>)
    //     }
    // },
}, mainTabOptions)

export default class MainTabNavigation extends Component {
    static router = TabNav.router;

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        StatusBar.setBarStyle('dark-content')
        changeNavigationBarColor('#ffffff', true);
    }
    render() {
        return <TabNav />
    }
}
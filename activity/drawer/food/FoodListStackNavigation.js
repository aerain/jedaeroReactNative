import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { stackNavigationOptions } from '../../jedaeroCSS';
import FoodList from './foodlist';
import Haksik from './menu/haksik';
import Dormitory from './menu/dormitory';
import Hansik from './menu/hansik';

export default createStackNavigator(
    {
        FoodList: {
            screen: FoodList,
        },
        Haksik: {
            screen: Haksik,
            navigationOptions : {
                headerTitle:'백두관 식당'
            }
        },
        Dormitory: {
            screen: Dormitory,
            navigationOptions : {
                headerTitle:'기숙사 식당'
            }
        },
        Hansik: {
            screen: props => <Hansik navigation={props.navigation} list='hansik' />,
            navigationOptions: {
                headerTitle: '한식'
            }
        }, 
        OverSea: {
            screen: props => <Hansik navigation={props.navigation} list='oversea' />,
            navigationOptions: {
                headerTitle: '중•일•양식'
            }
        }, 
        Chicken: {
            screen: props => <Hansik navigation={props.navigation} list='chicken' />,
            navigationOptions: {
                headerTitle: '치킨'
            }
        }, 

    }, stackNavigationOptions
)
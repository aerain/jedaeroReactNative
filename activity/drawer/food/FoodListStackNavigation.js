import { createStackNavigator } from 'react-navigation';

import { stackNavigationOptions } from '../../jedaeroCSS';
import FoodList from './foodlist';
import Haksik from './menu/haksik';
import Dormitory from './menu/dormitory';

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
        }
    }, stackNavigationOptions
)
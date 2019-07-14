import { createStackNavigator } from 'react-navigation';
import Bus from './bus';
import Login from './login';
import { stackNavigationOptions } from '../../jedaeroCSS';
import Detail from './developer';
import License from './License';
import Haksik from '../food/menu/haksik';
import Dormitory from '../food/menu/dormitory';


export default createStackNavigator({
    Bus: {
        screen: Bus,
    },
    Login: {
        screen: Login
    },
    Detail : {
        screen: Detail,
    },
    Second: {
        screen: License,
    },
    Haksik: {
        screen: Haksik,
    },
    Dormitory: {
        screen: Dormitory, 
    },
}, stackNavigationOptions );
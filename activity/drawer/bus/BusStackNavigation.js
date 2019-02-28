import { createStackNavigator } from 'react-navigation';
import Bus from './bus';
import Login from './login';
import { stackNavigationOptions } from '../../jedaeroCSS';
import Detail from './detail';


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
    
}, stackNavigationOptions );
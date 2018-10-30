import { createStackNavigator } from 'react-navigation';
import Bus from './bus';
import { stackNavigationOptions } from '../../jedaeroCSS';

export default createStackNavigator({
    BusScHome: {
        screen: Bus,
    }
}, stackNavigationOptions );
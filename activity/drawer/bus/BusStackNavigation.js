import { createStackNavigator } from 'react-navigation';
import Bus from './bus';
import SmartCheck from '../smartcheck/smartcheck';

import { stackNavigationOptions } from '../../jedaeroCSS';

export default createStackNavigator({
    Bus: {
        screen: Bus,
    },
    SmartCheck: {
        screen: SmartCheck,
    }
}, stackNavigationOptions );
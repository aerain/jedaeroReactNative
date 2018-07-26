import { createStackNavigator } from 'react-navigation';
import Bus from './bus';
import Detail from './detail';

import { stackNavigationOptions } from '../../jedaeroCSS';

export default createStackNavigator({
    Bus: {
        screen: Bus,
    },
    Detail: {
        screen: Detail,
    }
}, stackNavigationOptions );
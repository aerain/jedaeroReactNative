import { createDrawerNavigator } from 'react-navigation';

import MainStack from './MainStackNavigation';

export default createDrawerNavigator({
    MainStack: {
        screen: MainStack
    }
}, {
    drawerPosition: 'right'

})
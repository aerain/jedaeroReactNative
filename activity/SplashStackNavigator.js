import { createStackNavigator } from 'react-navigation'
import splash from './splash';
import MainTabNavigation from './MainTabNavigation';

export default createStackNavigator({
    splash: {
        screen: splash
    },
    mainTab: {
        screen: MainTabNavigation
    }
})
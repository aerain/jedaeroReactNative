import { createStackNavigator } from 'react-navigation';
import SettingHome from './settingsHome';
import SettingsDetail from './settingsDetail';

export default createStackNavigator({
    settingHome: {
        screen: SettingHome
    },
    settingDetail: {
        screen: SettingsDetail
    }
})
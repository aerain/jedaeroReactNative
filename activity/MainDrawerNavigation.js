import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import { normalize } from 'react-native-elements';

import BusStack from './drawer/bus/BusStackNavigation';
import FoodStack from './drawer/food/FoodListStackNavigation';

let drawerContentComponent = (props) => (
    <ScrollView>
        <View style={{backgroundColor:'#344955'}}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={{paddingLeft:30, paddingRight:30, width:'100%', height:150, backgroundColor:'#344955', justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../images/logo.png')} style={{width: '100%'}} resizeMode="contain" />
            </View>
            </SafeAreaView>
        </View>
        <SafeAreaView>
        <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

export default createDrawerNavigator({
    Bus: {
        screen: BusStack,
        navigationOptions: {
            title: '순환버스'
        }
    },
    Food: {
        screen: FoodStack,
        navigationOptions: {
            title: '뭐먹을까'
        }
    }

}, {
    drawerPosition: 'right',
    contentComponent: drawerContentComponent.bind(this),
    contentOptions: {
        inactiveLabelStyle: {
            fontSize: normalize(16),
        },
        activeLabelStyle: {
            fontSize: normalize(32),
        },
        activeBackgroundColor: '#00000000',
        activeTintColor:'#000000',
        itemStyle: {
            marginBottom:16,
        }
    }

})
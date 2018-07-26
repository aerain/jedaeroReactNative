import React from 'react';
import { TouchableOpacity } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { normalize } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';

export default createStackNavigator({
    Home: {
        screen: Home,
    }
}, {
    mode: 'card',
    headerMode:'float',
    headerLayoutPreset: 'center',
    navigationOptions : ({navigation}) => {
        return {
            headerTitle: '순환버스',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor:'#344955'
            },
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <EvilIcon 
                        name="navicon" 
                        size={normalize(30)} 
                        color="#ffffff"
                        style={{marginRight:normalize(5)}}
                    />
                </TouchableOpacity>
            )
        } 
    }
})
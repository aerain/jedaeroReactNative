import React, { Component } from 'react';

import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ListItem, normalize } from 'react-native-elements';

import menuList from './menuList';
import { foodTabStyles } from '../../jedaeroCSS';

export default class FoodList extends Component {
    constructor(props) {
        super(props);

    }

    foodmenu = menuList(this);

    static navigationOptions = {
        headerTitle: "뭐먹을까"
    };
    
    render = () => {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:'#ffffff'}}>
                <ScrollView
                >
                    {
                        this.foodmenu.map((item, key) => (
                                <ListItem
                                    key={key}
                                    title={item.name}
                                    subtitle={item.subtitle}
                                    titleStyle={foodTabStyles.listTitleStyle}
                                    subtitleStyle={foodTabStyles.listSubtitleStyle}
                                    containerStyle={foodTabStyles.listContainerStyle}
                                    onPress={item._clickFood}
                                    underlayColor="rgba(0,0,0,0)"
                                    hideChevron={true}
                                />
                          ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}




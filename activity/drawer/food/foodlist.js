import React, { Component } from 'react';

import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ListItem, normalize } from 'react-native-elements';

import menuList from './menuList';

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
            <SafeAreaView style={{flex:1, backgroundColor:'#f7f7f7'}}>
                <ScrollView
                    style={{ paddingTop:normalize(16)}}
                >
                    {
                        this.foodmenu.map((item, key) => (
                                <ListItem
                                    key={key}
                                    title={item.name}
                                    subtitle={item.subtitle}
                                    titleStyle={styles.listTitleStyle}
                                    subtitleStyle={styles.listSubtitleStyle}
                                    containerStyle={styles.listContainerStyle}
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

const styles = StyleSheet.create({
    listTitleStyle: {
      fontSize: normalize(20),
      textAlign:'center',
      fontWeight: 'bold',
    },
    listSubtitleStyle: {
      textAlign:'center',
      fontSize: normalize(14)
    },
    listContainerStyle: {
      paddingTop:24,
      paddingBottom:16,
      backgroundColor:'white',
      marginBottom:8
    }
})


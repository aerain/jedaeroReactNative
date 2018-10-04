import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Image, Platform } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { normalize } from 'react-native-elements';


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

let lightText = {
    fontWeight: '300',
    fontFamily: 'NotoSansCJKkr-Thin',
    color: 'black',
}

let regularText = {
    fontWeight:'normal',
    fontFamily: 'NotoSansCJKkr-Regular',
    color: 'black',
}
let stackNavigationOptions = {
    mode: 'modal',
    headerMode:'screen',
    headerLayoutPreset: 'center',
    navigationOptions : ({navigation}) => {
        return {
            headerTintColor: '#000000',
            headerStyle: {
                backgroundColor:'#ffffff',
                elevation: 0,
                borderBottomWidth: 0.5,
                borderBottomColor:'#d7d7d7',
            },
            headerTitleStyle: {
                fontSize:normalize(20),
                lineHeight:normalize(20) * 1.5,
                ...lightText,
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
                        color="#000000"
                        style={{marginRight:normalize(8)}}
                    />
                </TouchableOpacity>
            )
        } 
    }
}

let jedaeroStyles = StyleSheet.create({

})

let foodMenuListStyles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 32,
        backgroundColor:'#ffffff',
        borderBottomWidth:0.5,
        borderBottomColor:'#d7d7d7'
    },
    labelStyle: {
        fontSize:normalize(20),
        lineHeight: normalize(20) * 1.5,
        ...lightText,
    }
})

let foodTabStyles = StyleSheet.create({
    listTitleStyle: {
      fontSize: normalize(20),
      lineHeight: normalize(20) * 1.5,
      textAlign:'center',
      color: 'white',
      ...regularText,
    },
    listSubtitleStyle: {
      textAlign:'center',
      fontSize: normalize(16),
      lineHeight: normalize(16) * 1.5,
      color: 'black',
      ...lightText
    },
    listContainerStyle: {
      paddingTop:24,
      paddingBottom:16,
      backgroundColor:'white',
      borderBottomWidth: 0.5,
      borderBottomColor:'#d7d7d7'
    }
})

let foodTabNavStyles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#ffffff'
    },
    title: {
      justifyContent:'center',
      alignItems:'center'
    },
    foodlist: {fontSize:normalize(16), textAlign:'center', ...lightText},
    foodlistContainer: {
      backgroundColor:'#344955',
      borderTopLeftRadius:4,
      borderTopRightRadius:4
    },
    foodlistTitle: {
      textAlign:'center',
      fontSize: normalize(20),
      lineHeight: normalize(20) * 1.5,
      ...lightText,
      color:'white',
    },
    subContainer: {
      borderLeftWidth:0.5,
      borderRightWidth:0.5,
      borderBottomWidth:0.5,
      borderColor:'#d7d7d7',
    }
});

let drawerOptions = {
    drawerPosition: 'right',
    contentComponent: drawerContentComponent.bind(this),
    contentOptions: {
        inactiveLabelStyle: {
            fontSize: normalize(16),
            lineHeight: normalize(16) * 1.5,
            ...lightText
        },
        activeLabelStyle: {
            fontSize: normalize(32),
            lineHeight: normalize(32) * 1.5,
            ...lightText
        },
        activeBackgroundColor: '#00000000',
        activeTintColor:'#000000',
        itemStyle: {
            marginBottom:16,
        }
    }

}

let libsearchStyles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor:'#ffffff', 
      paddingHorizontal: 32,
    },
    textContainer: {
      width: '100%', 
      fontSize:normalize(24), 
      lineHeight:normalize(24) * 1.5, 
      paddingVertical:8, 
      textAlign:'center', 
      borderBottomWidth:0.5, 
      borderBottomColor:'black',
      ...lightText,
    }
  })
export { stackNavigationOptions, jedaeroStyles, foodMenuListStyles, foodTabStyles, foodTabNavStyles, lightText, regularText, drawerOptions, libsearchStyles }
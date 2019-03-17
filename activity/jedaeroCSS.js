import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Image, Platform, Animated, Easing } from 'react-native';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { normalize } from 'react-native-elements';

import './css/busStyle'


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
    color: '#000000',
}

let regularText = {
    fontWeight:'normal',
    fontFamily: 'NotoSansCJKkr-Regular',
    color: '#000000',
}
let stackNavigationOptions = {
    mode: 'modal',
    headerMode:'screen',
    headerLayoutPreset: 'left',
    navigationOptions : ({navigation}) => {
        return {
            headerTintColor: '#000000',
            headerStyle: {
                backgroundColor:'#ffffff',
                borderBottomWidth: 0,
                elevation: 0,
            },
            headerTitleStyle: {
                fontSize:normalize(20),
            },
            gestureEnabled: true,
            gestureDirection: 'default',
            // headerLeft: (
            //     <Ionicons
            //         name="ios-arrow-back"
            //         size={normalize(30)}
            //         color="#344955"
            //     />
            // )
            // headerRight: (
            //     <TouchableOpacity
            //         onPress={() => {
            //             console.log('바보');
            //         }}
            //     >
            //         <Ionicons 
            //             name="ios-settings" 
            //             size={normalize(30)} 
            //             color="#344955"
            //             style={{marginRight:normalize(8)}}
            //         />
            //     </TouchableOpacity>
            // )
        } 
    },
    transitionConfig: () => ({
        transitionSpec: {
          duration: 200,
          easing: Easing.out(Easing.poly(2)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
  
          const Height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Height, 0, 0],
          });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
          return { opacity, transform: [{ translateY }] };
        },
    }),
}

let jedaeroStyles = StyleSheet.create({

})

let foodMenuListStyles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingBottom: 32,
        backgroundColor:'#ffffff',
        borderBottomWidth:0.5,
        borderBottomColor:'#e7e7e7'
    },
    labelStyle: {
        fontSize:normalize(20),
    }
})

let foodTabStyles = StyleSheet.create({
    listTitleStyle: {
      textAlign: 'center',
      fontSize: normalize(20),
      color: '#000000',
    },
    listSubtitleStyle: {
      textAlign:'center',
      color: '#7d7d7d',
      fontSize: 10
    },
    listContainerStyle: {
      paddingTop:24,
      paddingBottom:16,
      backgroundColor:'white',
      borderWidth: 0.5,
      borderColor:'#e7e7e7',
      marginHorizontal:10,
      marginBottom:16,
      borderRadius:4,
      overflow:'hidden'
    }
})

let foodTabNavStyles = StyleSheet.create({
    scrollContainer: {
      paddingTop:8,
      backgroundColor: '#f7f7f7'
    },
    container: {
      flex:1,
      backgroundColor:'#ffffff',
      borderRadius:4,
      borderColor:'#e7e7e7',
      borderWidth:0.5,
      overflow:'hidden',
      marginHorizontal:8,
      marginBottom: 16,
    },
    title: {
      justifyContent:'center',
      alignItems:'center'
    },
    foodlist: {
      fontSize: normalize(14), 
      textAlign:'left', 
      color: '#000000', 
      width:'68%', 
      paddingLeft: 20
    },
    foodtime: {
      fontSize: normalize(8),
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign:'left', 
      color: '#000000',
      paddingLeft: 12, 
      borderLeftWidth: 0.3, 
      borderColor:"#D3D3D3",
      width: '32%' 
    },
    foodlistContainer: {
      paddingVertical:4,
    },
    foodlistTitle: {
      textAlign:'center',
      fontSize: normalize(20),
      color:'white',
    },
    subContainer: {
      paddingVertical:8,
      flexDirection: 'row'
    }
});

let mainTabOptions = {
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#d7d7d7',
      showLabel: false,
      style: {
        backgroundColor:'#ffffff',
        borderTopWidth:0.5,
        borderTopColor:'#e7e7e7',
        height:65
      },
    }
    
    // contentComponent: drawerContentComponent.bind(this),
    // contentOptions: {
    //     inactiveLabelStyle: {
    //         fontSize: normalize(16),
    //         lineHeight: normalize(16) * 1.5,
    //         ...lightText
    //     },
    //     activeLabelStyle: {
    //         fontSize: normalize(32),
    //         ...lightText
    //     },
    //     activeBackgroundColor: '#00000000',
    //     activeTintColor:'#000000',
    //     itemStyle: {
    //         marginBottom:16,
    //     }
    // }

}

let libsearchStyles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingBottom:32,
    },
    textContainer: {
      fontSize:normalize(24),  
      paddingVertical:8, 
      textAlign:'center', 
      borderBottomWidth:0.5, 
      borderBottomColor:'black',
    }
  })

let menuTopTabOptions = {
    backBehavior: 'none',
    tabBarPosition: 'top',
    tabBarOptions: {
        showIcon:false,
        activeTintColor: "#000000",
        inactiveTintColor:'#d7d7d7',
        tabStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        labelStyle: {
            fontSize: normalize(20),
        },
        style: {
          backgroundColor:'#ffffff',
          borderBottomWidth:0.5,
          borderBottomColor:'#d7d7d7',
          elevation:0
        },
        indicatorStyle: {
          marginBottomWidth:0,
          height:0
        },
        safeAreaInset: {bottom:'never', top:'never'}
    },

  }
export { stackNavigationOptions, jedaeroStyles, foodMenuListStyles, foodTabStyles, foodTabNavStyles, mainTabOptions, libsearchStyles, menuTopTabOptions }
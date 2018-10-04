import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { normalize } from 'react-native-elements';

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
                fontSize:normalize(24)
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
        marginTop:8,
        marginBottom:8,
    },
    labelStyle: {
        fontSize:normalize(20),
    }
})

let foodTabStyles = StyleSheet.create({
    listTitleStyle: {
      fontSize: normalize(20),
      textAlign:'center',
      fontWeight: 'bold',
      fontFamily: 'NotoSansCJKkr-Regular',
      color: 'black',
    },
    listSubtitleStyle: {
      textAlign:'center',
      fontWeight: '100',
      fontSize: normalize(16),
      fontFamily: 'NotoSansCJKkr-Thin',
      color: 'black',
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
    foodlist: {fontSize:normalize(16), textAlign:'center', fontFamily:'NotoSansCJKkr-Regular'},
    foodlistContainer: {
      backgroundColor:'#344955',
      borderTopLeftRadius:4,
      borderTopRightRadius:4
    },
    foodlistTitle: {
      textAlign:'center',
      fontSize: normalize(20),
      fontFamily: 'NotoSansCJKkr-Regular',
      color:'white'
    },
    subContainer: {
      borderLeftWidth:0.5,
      borderRightWidth:0.5,
      borderBottomWidth:0.5,
      borderColor:'#d7d7d7',
    }
});
export { stackNavigationOptions, jedaeroStyles, foodMenuListStyles, foodTabStyles, foodTabNavStyles }
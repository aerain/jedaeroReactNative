import { StyleSheet } from 'react-native';
import { normalize } from 'react-native-elements';

const mainScreen = StyleSheet.create({
    busView: {
        // flex:1, 
        minHeight: '100%',
        backgroundColor:'#e7e7e7',
        flexDirection: 'column', 
        justifyContent: 'flex-start',
    },
   
    blockView: {
        height:"auto",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderColor: '#e7e7e7',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
    blockViewTitle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    blockViewTitleText: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color:'#ffffff',
    },
    blockViewHelpText: {
        fontSize: normalize(11),
        color: '#ffffff',
    },
    blockViewContainer: {
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#e7e7e7',
        overflow: 'hidden',
    },
    blockViewContainerSub: {
        flex: 2,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent:'center', 
        alignItems:'center',
        borderColor:'#e7e7e7'
    },
    blockViewContainerMain: {
        flex: 1,
        textAlign: 'center',
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#e7e7e7'
    },
    blockTitle: {
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: '#000000',
        paddingVertical:5,
        paddingHorizontal:15,
        borderRightWidth:0.3,
        borderColor:"#D3D3D3",
    },
    blockText: {
        fontSize: normalize(13),
        color: '#000000',
        
    },
    busWay: {
        fontSize: normalize(8),
        marginTop: -5

    },
    foodBlockContainerTitle: {
        fontWeight: 'bold',
        fontSize: normalize(12)
    },
    foodBlockContainerText: {
        fontSize: normalize(12)
    },
    foodViewBlockContainer: {
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderColor: '#e7e7e7',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        overflow: 'hidden'
    }
})

export { mainScreen }
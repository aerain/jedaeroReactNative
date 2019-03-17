import { StyleSheet } from 'react-native';

const mainScreen = StyleSheet.create({
    busView: {
        flex:1, 
        backgroundColor:'#ffffff',
        flexDirection: 'column', 
        // justifyContent:'flex-start'
    },
    foodBlockSwiper: {
        flex: 1
    },
    blockView: {
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
        fontSize: 16,
        fontWeight: 'bold',
        color:'#ffffff',
    },
    blockViewHelpText: {
        fontSize: 10,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    blockText: {
        fontSize: 16,
        color: '#000000'
    },
    foodBlockContainerTitle: {
        fontWeight: 'bold'
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
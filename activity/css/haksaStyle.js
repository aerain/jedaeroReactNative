import { StyleSheet } from 'react-native';
import { normalize } from 'react-native-elements';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingBottom: 16,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    listContainer: {
        backgroundColor:'#ffffff'
    },
    onLoading: {
        alignItems: 'center', paddingTop:20, flex:1, backgroundColor:'#ffffff'
    },
    calendarBlock: {
        paddingVertical: 15,
        marginHorizontal: '1%',
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: '#e7e7e7',
        borderRadius: 4,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '31.3%'
    },
    calendarMonth: {
        fontSize: normalize(24),
        fontWeight: 'bold'
    }
})
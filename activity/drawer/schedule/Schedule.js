import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ListItem, normalize } from 'react-native-elements';
import haksaStyles from '../../css/haksaStyle'
import { stackNavigationOptions } from '../../jedaeroCSS';

import HaksaAPI from '../../JedaeroAPI/HaksaAPI';
import ScheduleDetail from './ScheduleDetail';

// 헤더 활용 위해 부득이하게 내비게이션 사용
class Schedule extends Component {
    static navigationOptions = {
        title: '학사일정'
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        HaksaAPI()
        .then(dataSource => {
            console.log(dataSource);
            this.setState({ dataSource });
        });
    }

    _renderItem = (item, index) => {
        let isNextYear = parseInt(index / 12) ? true : false;
        let month = index % 12 + 1;
        return (
            <TouchableOpacity 
                key={index} 
                style={haksaStyles.calendarBlock}
                onPress={() => this.props.navigation.navigate('ScheduleDetail', item)}
            >
                <Text style={haksaStyles.calendarMonth}>{month}</Text>
                <Text>월</Text>
                {(isNextYear) ? (<Text>{new Date().getFullYear() + 1}년</Text>) : null}
            </TouchableOpacity>
            // <ListItem 
            //     key={item['month_title']}
            //     title={item['month_title']}
            //     containerStyle={haksaStyles.listContainer}
            //     titleStyle={{textAlign:'center', fontSize: normalize(20)}}
            //     chevron
            //     onPress={() => this.props.navigation.navigate('ScheduleDetail', item)}
            // />
        )
    }
    render() {
        return (!this.state.dataSource) 
        ? (
        <View style={haksaStyles.onLoading}>
            <ActivityIndicator size='large' color='#344955'/>
        </View>
        ) : (
        <ScrollView contentContainerStyle={haksaStyles.container}>
            {
                this.state.dataSource.month.map(this._renderItem)
                // this.state.dataSource.month.map(item => (
                //     <ListItem 
                //         key={item['month_title']}
                //         title={item['month_title']}
                //         containerStyle={haksaStyles.listContainer}
                //         titleStyle={{textAlign:'center', fontSize: normalize(20)}}
                //         chevron
                //         onPress={() => this.props.navigation.navigate('ScheduleDetail', item)}
                //     />
                // ))
            }
        </ScrollView>
        )
    }
}

// let haksaStyles = StyleSheet.create({
//     container: {
//         paddingBottom: 56,
//     },
//     listContainer: {
//         backgroundColor:'#ffffff'
//     },
//     onLoading: {
//         alignItems: 'center', paddingTop:20, flex:1, backgroundColor:'#ffffff'
//     }
// })
export default ScheduleStackNavigator = createStackNavigator({
    Schedule: {
        screen: Schedule,
    },
    ScheduleDetail: {
        screen: ScheduleDetail,
    }
}, stackNavigationOptions);
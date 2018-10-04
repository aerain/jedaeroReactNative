import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { normalize } from 'react-native-elements';

export default class ScheduleDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('month_title')
        }
    };
    
    constructor(props) {
        super(props);
        this.state= {

        };
    }

    _renderItem = ({item, index}) => (
        <View key={index} style={{paddingVertical: 16, paddingHorizontal: 8, borderBottomColor:'#d7d7d7', borderBottomWidth: 0.5}}>
            <Text style={{textAlign:'center', fontSize:(index % 2 == 0 ? normalize(18) : normalize(14)), fontFamily:'NotoSansCJKkr-Thin'}}>{item.haksa}</Text>
        </View>
    )

    render() {
        let schedule = this.props.navigation.getParam('schedule');
        console.log(schedule);
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
                <FlatList 
                    data={schedule}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}
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

    _keyExtractor = (item, index) => item.key;
    _renderItem = ({item, index}) => (
        <View style={{paddingVertical: 16, paddingHorizontal: 8, borderBottomColor:'#d7d7d7', borderBottomWidth: 0.5}}>
            <Text style={{textAlign:'center', fontSize:(index % 2 == 0 ? normalize(18) : normalize(14))}}>{item.haksa}</Text>
        </View>
    )

    render() {
        let schedule = this.props.navigation.getParam('schedule');
        console.log(schedule);
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
                <FlatList 
                    keyExtractor={this._keyExtractor}
                    data={schedule}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}
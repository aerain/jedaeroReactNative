import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions } from '../../jedaeroCSS';

import HaksaAPI from '../../JedaeroAPI/HaksaAPI';
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
        .then(data => {
            console.log(data);
        });
    }

    render() {
        return (
        <View>
            <Text> textInComponent </Text>
        </View>
        )
    }
}

export default ScheduleStackNavigator = createStackNavigator({
    Schedule: {
        screen: Schedule,
    }
}, stackNavigationOptions);
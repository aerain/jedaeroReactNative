import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DreamyAPI from '../../JedaeroAPI/DreamyAPI';

export default class Detail extends Component {
    static navigationOptions = {
        title : "바보냐"
    }
    constructor(props) {
        super(props);
    }

    // componentDidMount = () => DreamyAPI("2014108205", "gkrtnfqn1!");
    
    render = () => {
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
                <Text>Welcome to Detail Screen!</Text>
            </View>
        )
    }
}
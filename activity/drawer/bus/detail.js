import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DreamyAPI from '../../JedaeroAPI/DreamyAPI';

export default class Detail extends Component {
    static navigationOptions = {
        title : "정보"
    }
    constructor(props) {
        super(props);
    }

    // componentDidMount = () => DreamyAPI("2014108205", "gkrtnfqn1!");
    
    render = () => {
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
                <Text>
                    이청길
                    git: https://github.com/aerain
                    최원범
                    git: https://github.com/wonbeomchoi
                    오현규
                    git: https://github.com/rbrbrb7290
                    김승현
                    git: https://github.com/zkdlfhtm1
                </Text>
            </View>
        )
    }
}
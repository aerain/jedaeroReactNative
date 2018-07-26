import React, { Component } from 'react';
import Bus from './drawer/bus/bus';

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = () => {
        return {
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor:'#344955'
            },
        } 
    }

    render = () => {
        return <Bus />
    }
}
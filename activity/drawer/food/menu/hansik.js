import React, { Component } from 'react';
import { TouchableOpacity,  View, Text, FlatList } from 'react-native';

import hansik from '../../../../jsons/hansik.json';
import etcera from '../../../../jsons/etc.json';
import chicken from '../../../../jsons/chicken.json';
import { foodMenuListStyles } from '../../../jedaeroCSS';

export default class Hansik extends Component {
    
    constructor(props) {
        super(props);
        
        // this.props.list에 hansik, etcera, chicken 셋중 하나는 반드시 있음.
        this.state = {

        }
    }

    componentDidMount = () => this._setFood();

    _setFood = () => {
        if(this.props.list === 'hansik') {
            this.setState({ foodMenu : hansik });
        } else if(this.props.list === 'etcera') {
            this.setState({ foodMenu : etcera });
        } else if(this.props.list === 'chicken') {
            this.setState({ foodMenu : chicken});
        }
    }

    _renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("DetailMenu", item)}}
        >
            <View style={foodMenuListStyles.container}>
                <Text style={foodMenuListStyles.labelStyle}>{item.name}</Text>
            </View> 
        </TouchableOpacity>
    )

    render = () => {
        let dataSource = this.state.foodMenu;
        console.log(dataSource);
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={dataSource}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}


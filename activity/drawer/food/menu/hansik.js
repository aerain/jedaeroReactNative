import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import hansik from '../../../../jsons/hansik.json';
import etcera from '../../../../jsons/etc.json';
import chicken from '../../../../jsons/chicken.json'
import { foodMenuListStyles } from '../../../jedaeroCSS';



export default class Hansik extends Component {
    
    constructor(props) {
        super(props);
        this.state={

        }
    }
    _setFood = () => {
        if(this.props.list === 'hansik'){
            this.setState({ foodMenu : hansik})
        }else if (this.props.list ==='chicken'){
            this.setState({foodMenu : chicken})
        }else if(this.props.list === 'etcera'){
            this.setState({foodMenu : etcera})
        }
    }
    componentDidMount = () => this._setFood();

    _renderItem = ({item}) =>(
        <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate("DetailMenu", {item})}}
        >
            <View elevation={10} style={foodMenuListStyles.container}>
                <Text style={foodMenuListStyles.labelStyles}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    render = () => {
        let dataSource = this.state.foodMenu
        return (
            <View style = {{flex: 1}}>
                <FlatList
                    data = {dataSource}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}


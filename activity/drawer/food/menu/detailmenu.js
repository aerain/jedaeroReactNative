import React, { Component } from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native';
import Comu from 'react-native-communications';
export default class DetailMenu extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name')
        }
    };
    constructor(props) {
        super(props);
        this.item = this.props.navigation.state.params;

    }

    render () {
        console.log(this.item);
        return (
            <View style={{flex: 1}}>
                <View style={{flex : 6}}>
                    <Image 
                    style={{width:'100%', height:'100%', resizeMode: 'contain'}}
                    source={{uri:this.item.images}}/>
                </View>
                <View style={{flex:1}}>
                    <Text>{this.item.name}</Text>
                </View>
                
                <TouchableOpacity style = {{flex:1, backgroundColor:'#344955'}}onPress={()=> Comu.phonecall(this.item.tel,true)}>
                <Text>{this.item.tel}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
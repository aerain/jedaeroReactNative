import React, { Component } from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native';
import Comu from 'react-native-communications';
import { normalize } from 'react-native-elements';
import PinchZoom from 'react-native-pinch-zoom-view';

export default class DetailMenu extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name', "정보 없음")
        }
    };
    constructor(props) {
        super(props);
        this.item = this.props.navigation.state.params;
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <PinchZoom style={{flex : 6}}>
                    <Image 
                    style={{width:'100%', height:'100%', resizeMode: 'contain'}}
                    source={{uri:this.item.images}}/>
                </PinchZoom>
                   <CallBlock tel={this.item.tel} />
                
            </View>
        )
    }
}

class CallBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tel = this.props.tel;
        if(this.props.tel !== "") {
            return (
                <TouchableOpacity style = {{flex:1, opacity:0.7, backgroundColor:'#344955', justifyContent:'center', alignItems:'center'}}onPress={()=> Comu.phonecall(this.props.tel,true)}>
                    <Text style={{color:'#ffffff', fontSize:normalize(20)}}>전화걸기</Text>
                </TouchableOpacity>
            )
        } else return null;
    }
}
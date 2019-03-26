import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet,Linking,TouchableOpacity } from 'react-native';
import { normalize } from 'react-native-elements';
import DreamyAPI from '../../JedaeroAPI/DreamyAPI';
import License from '../../../jsons/license';


export default class Detail extends Component {
    static navigationOptions = {
        title : "정보"
    }
    constructor(props) {
        super(props);
        this.state ={License}
    }
    _render_item = ({item}) => {
        return <TouchableOpacity 
                style={{
                paddingTop:24,
                paddingBottom:16,
                backgroundColor:'white',
                borderWidth: 0.5,
                borderColor:'#e7e7e7',
                marginHorizontal:10,
                marginBottom:16,
                borderRadius:4,
                overflow:'hidden'}} onPress={() => Linking.openURL(item.agreement)}>
                    <Text style={{
                    textAlign: 'center',
                    fontSize: normalize(20),
                    color: '#000000',
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        
                    textAlign:'center',
                    color: '#7d7d7d',
                    fontSize: normalize(10)
                    }}>
                        License : {item.license}
                    </Text>
            </TouchableOpacity>
        
            
    }

    // componentDidMount = () => DreamyAPI("2014108205", "gkrtnfqn1!");
    render = () => {
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
            <View style={{flex:1}}>
                <Text style={{textAlign: 'center',
      fontSize: normalize(20),
      color: '#000000'}}>
                    이청길 git: https://github.com/aerain
                </Text>
                <Text>
                    최원범 git: https://github.com/wonbeomchoi
                </Text>
                <Text>
                    오현규 git: https://github.com/rbrbrb7290
                </Text>
                
                <Text>
                    김승현 git: https://github.com/zkdlfhtm1
                </Text>
            </View>
            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: normalize(20),
                    color: '#000000',
                    }}>
                License

                </Text>
            </View>
            <View style={{flex:2}}>
                 <FlatList
                 data = {this.state.License.license}
                 renderItem={this._render_item}/>
                 </View>
            </View>
        )
    }
}

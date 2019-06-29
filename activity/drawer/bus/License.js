import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import license from '../../../jsons/license';
import { normalize } from 'react-native-elements';

export default class License extends Component {
    static navigationOptions = {
        title : "오픈소스 라이선스"
    }
    constructor(props) {
        super(props);
        this.state ={License}
    }

    _render_item = ({item}) => {
        return (<TouchableOpacity 
                    style={styles.list} onPress={() => Linking.openURL(item.agreement)}>
                    <Text style={{textAlign: 'center',fontSize: normalize(20), color: '#000000'}}>
                        {item.name}
                    </Text>
                    <Text style={{ textAlign:'center', color: '#7d7d7d', fontSize: normalize(10)}}>
                        License : {item.license}
                    </Text>
            </TouchableOpacity>)
    }
    render(){
        return (
            <FlatList 
                data = {license.license}
                renderItem={this._render_item}
            />
          
        );
    }
}

const styles = StyleSheet.create({

    list: {
            paddingTop:24,
            paddingBottom:16,
            backgroundColor:'white',
            borderWidth: 0.5,
            borderColor:'#e7e7e7',
            marginHorizontal:10,
            marginBottom:16,
            borderRadius:4,
            overflow:'hidden'
        }
    

})
import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet,Linking,TouchableOpacity ,Image} from 'react-native';
import { normalize } from 'react-native-elements';
import DreamyAPI from '../../JedaeroAPI/DreamyAPI';
import License from '../../../jsons/license';


export default class Detail extends Component {
    static navigationOptions = {
        title : "개발자 정보"
    }
    constructor(props) {
        super(props);
        this.state ={License}
    }
    _render_item = ({item}) => {
        return (<TouchableOpacity 
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
                    <Text style={{textAlign: 'center',fontSize: normalize(20), color: '#000000'}}>
                        {item.name}
                    </Text>
                    <Text style={{ textAlign:'center', color: '#7d7d7d', fontSize: normalize(10)}}>
                        License : {item.license}
                    </Text>
            </TouchableOpacity>)
    }

    // componentDidMount = () => DreamyAPI("2014108205", "gkrtnfqn1!");
    render = () => {
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff'}}>
                <View style={{flex:3, paddingHorizontal:30, paddingVertical:30}}>
                    <GithubLogo />
                    <DeveloperInfo name="이청길" github="https://github.com/aerain"/>
                    <DeveloperInfo name="최원범" github="https://github.com/WonBeomChoi"/>
                    <DeveloperInfo name="오현규" github="https://github.com/rbrbrb7290"/>
                    <DeveloperInfo name="김승현" github="https://github.com/zkdlfhtm1"/>
                </View>
                <View style={{flex:1,alignItems:"center"}}>
                <Text style={{ textAlign: "center", fontSize: normalize(20),}}> 오픈소스 정보</Text>
                <TouchableOpacity onPress={() =>  {this._flatList.scrollToIndex({index: 0, viewOffset: 0})}}>
                   
                    <Text style={styles.text}>
                         License
                    </Text>
                </TouchableOpacity>
               
                </View>
                
            </View>
        )
    }
}

class GithubLogo extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image style={{width:50,height:30, resizeMode:"contain"}} 
                    source ={require('../../../images/GitHub_Logo.png')}
                />
                 <Image style={{width:30,height:30, resizeMode:"contain"}} 
                    source ={require('../../../images/GitHub-Mark-64px.png')}
                />
            </View>
        )
    }
}

class DeveloperInfo extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render()
    {
        return(
            <View style={styles.Infowrap}>
                <Text style={styles.InfoText}>{this.props.name}<Text>{this.props.github}</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: normalize(18),
        color: '#000000',
    },
    Infowrap:{
        flex:1,
        paddingHorizontal:5,
        borderBottomWidth:0.3,
        borderColor:"#D3D3D3",

    },
    InfoText:{
        fontSize: normalize(12),
    }

})

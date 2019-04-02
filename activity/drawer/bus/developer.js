import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet,Linking,TouchableOpacity ,Image, ScrollView} from 'react-native';
import { normalize } from 'react-native-elements';
import License from '../../../jsons/license';

export default class Detail extends Component {
    static navigationOptions = {
        title:"개발자 정보"
    }
    constructor(props) {
        super(props);
       
    }

    // componentDidMount = () => DreamyAPI("2014108205", "gkrtnfqn1!");
    render = () => {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1, backgroundColor:'#ffffff', paddingVertical:30, paddingHorizontal:20}}>
              <GithubLogo />
                <ScrollView style={{paddingHorizontal:30, }}>
                    <DeveloperInfo name="이청길" github="https://github.com/aerain"/>
                    <DeveloperInfo name="최원범" github="https://github.com/WonBeomChoi"/>
                    <DeveloperInfo name="오현규" github="https://github.com/rbrbrb7290"/>
                    <DeveloperInfo name="김승현" github="https://github.com/wkdlfhtm1"/>
                </ScrollView>

                <View style={{flex:1,alignItems:"center"}}>
                <Text style={{ textAlign: "center", fontSize: normalize(20),}}> 오픈소스 정보</Text>
                <TouchableOpacity onPress={() =>  {navigation.navigate('Second')}}>
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
            <View style={{flexDirection:"row",paddingHorizontal:30, paddingVertical:7, borderBottomWidth:0.5, }}>
                 <Image style={{width:30,height:30, resizeMode:"contain"}} 
                    source ={require('../../../images/GitHub-Mark-64px.png')}
                />
                <Image style={{width:50,height:40, resizeMode:"contain"}} 
                    source ={require('../../../images/GitHub_Logo.png')}
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
            <View >
                <Text style={styles.Infowrap}>{this.props.name}</Text>
                <TouchableOpacity style={styles.InfoText}
                    onPress={() => Linking.openURL(this.props.github)}>
                <Text>{this.props.github}</Text>
                </TouchableOpacity>
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
        fontSize: normalize(12),
        height:"auto",
        paddingHorizontal:5,
        paddingVertical:15,
      

    },
    InfoText:{
        fontSize: normalize(12),
        borderBottomWidth:0.3,
        borderColor:"#D3D3D3",
    },

})

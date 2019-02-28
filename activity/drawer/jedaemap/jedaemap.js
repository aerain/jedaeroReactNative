import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { SearchBar, normalize, Button, ListItem, } from 'react-native-elements';
import { libsearchStyles } from '../../jedaeroCSS';
import jedaemapAPI from '../../JedaeroAPI/JedaemapAPI';

export default class jedaemap extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      babo:'',
    }
  }
  static navigationOptions = () => {
    return {
        headerTitle: '홈',
    } 
}
  

  _keyExtractor = (item, index) => item.No
  
  _renderItem = ({item, key}) => {
    // console.log(item);
    return (
      <ListItem 
          key={key}
          subtitle={
            <View style = {{borderBottomWidth: 1, borderBottomColor: '#d7d7d7',marginBottom: 2, paddingBottom:15}}>
                <Text style={jedaemapStyles.subtitleStyle}>{item.build_name} {item.floor_name}</Text>
                <Text style={jedaemapStyles.subtitleStyle}>{item.room_hosil}호 {item.room_name}</Text>
            </View>
          }
      />
    
    )
  }
  
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'#ffffff'}} forceInset={{bottom: "never"}}>
        <ScrollView contentContainerStyle={libsearchStyles.container}>
          <View style={{padding: 8, borderRadius: 8}}>
            <TextInput 
            placeholder="찾으실 곳을 입력 하세요"
            style={libsearchStyles.textContainer}
            onChangeText={search => this.setState({search})}
            />
            <Button
            title="검색"
            onPress={() => {
              if(this.state.search.trim() !== '') {
                jedaemapAPI(this.state.search)
                .then(data => {
                  console.log(data);
                  this.setState({babo: data});
                })
                }
              }
            }
            buttonStyle={{backgroundColor:'transparent', elevation:0, paddingVertical:16,}}
            titleStyle={{color:'#344955', fontSize:normalize(16)}}
            />
            <FlatList
                data={this.state.babo}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                
            />
            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

let jedaemapStyles = StyleSheet.create({
  container: {
      backgroundColor:'#ffffff',
  },

  textStyle: {marginHorizontal: 8, marginBottom: 4, fontSize:normalize(20), textAlign:'center',},
  subtitleStyle: {fontSize:normalize(12),paddingBottom: 8},
  Viewstyle: { paddingLeft: 10, paddingTop: 5}
})

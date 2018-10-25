import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { SearchBar, normalize, Button, } from 'react-native-elements';
import { libsearchStyles } from '../../jedaeroCSS';

export default class LibrarySearch extends Component {
  static navigationOptions= {
      headerTitle: "도서검색"
  }

  constructor(props) {
    super(props);
    this.state = {
      search: '소나기',
    }
  }
  render() {
    return (
      <SafeAreaView style={libsearchStyles.container} forceInset={{bottom: "always"}}>
        <TextInput 
        placeholder="책 제목을 입력하세요"
        style={libsearchStyles.textContainer}
        onChangeText={search => this.setState({search})}
        />
        <Button
        title="검색"
        onPress={() => {
          if(this.state.search != '') {
            this.props.navigation.navigate('LibrarySearchDetail', {search: this.state.search})}
          }
        }
        buttonStyle={{backgroundColor:'transparent', elevation:0, paddingVertical:16,}}
        titleStyle={{color:'#344955', fontSize:normalize(16)}}
        />
        
      </SafeAreaView>
    )
  }
}


import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { SearchBar, normalize } from 'react-native-elements';

export default class LibrarySearch extends Component {
  static navigationOptions= {
      headerTitle: "도서검색"
  }

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}forceInset={{bottom: "always"}}>
        <TextInput 
        placeholder="책 제목을 입력하세요"
        style={{width: '100%', paddingHorizontal: 32, fontSize:normalize(30), fontWeight: '100',}}
        onChangeText={search => this.setState({search})}
        />
        <Button
        title="검색"
        onPress={() => {
          if(this.state.search != '') {
            this.props.navigation.navigate('LibrarySearchDetail', {search: this.state.search})}
          }
        }
        />
      </SafeAreaView>
    )
  }
}
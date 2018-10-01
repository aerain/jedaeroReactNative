import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { SearchBar } from 'react-native-elements';

export default class LibrarySearch extends Component {
    static navigationOptions= {
        headerTitle: "도서검색"
    }
  render() {
    return (
      <SafeAreaView forceInset={{bottom: "always"}}>
        <SearchBar 
            lightTheme
            round
        />
      </SafeAreaView>
    )
  }
}
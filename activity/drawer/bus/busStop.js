import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class BusStop extends Component {
    constructor(props) {
        super(props);
        this.state={BusStop};
    }

   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "정문" value = "0" />
               <Picker.Item label = "제2도서관" value = "1" />
               <Picker.Item label = "해양대 1호관" value = "2" />
               <Picker.Item label = "본관" value = "3" />
               <Picker.Item label = "학생회관" value = "4" />
               <Picker.Item label = "인대 서쪽" value = "5" />
               <Picker.Item label = "기숙사" value = "6" />
               <Picker.Item label = "인대 동쪽" value = "7" />
               <Picker.Item label = "중앙도서관" value = "8" />
               <Picker.Item label = "의전원" value = "9" />
               <Picker.Item label = "공대 4호관" value = "10" />
               <Picker.Item label = "교양동" value = "11" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})
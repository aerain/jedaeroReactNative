import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { lightText } from '../../jedaeroCSS';

export default class BookDetail extends Component {
    static navigationOptions = {
        title: '도서상세'
    }
    constructor(props) {
        super(props);
        this.state = {

        }

        console.log(this.props.navigation.state.params);
    }

    componentDidMount = () => this._getData();

    _getData = async () => {
        let uri = `http://lib.jejunu.ac.kr/pyxis-api/1/biblios/${this.props.navigation.getParam('id')}/items`;
        console.log(uri);
        let res = await fetch(uri);
        let data = await res.json();
        console.log(data);
    }

    render() {
        return (
        <View style={bookdetailStyles.container}>
            <Text style={bookdetailStyles.text}> 입니다. </Text>
        </View>
        )
    }
}

let bookdetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    text: {
        ...lightText
    }
});
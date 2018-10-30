import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { normalize } from 'react-native-elements';

export default class LibrarySeat extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return(
            <View>
                <Text style={styles.titleText}>도서관</Text>

            </View>
        )
    }
}

class TableRow extends Component {
    
}

const styles = StyleSheet.create({
    titleText: {
        color:'#334955',
        fontSize:normalize(20),
        marginBottom: 16,
    }
})
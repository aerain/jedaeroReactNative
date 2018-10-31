import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { normalize } from 'react-native-elements';
import LibrarySeatAPI from '../../JedaeroAPI/LibrarySeatAPI';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class LibrarySeat extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount = () => this.getData();
    
    getData = async () => {
        let data = await LibrarySeatAPI();
        this.setState({data});

    }

    _renderItem = ({item, key}) => (
        <TableRow key={item['table0']} left={item['table1']} right={`${item['table3']} / ${item['table2']}`} />
    )

    render() {
        if (!this.state.data) {
            return (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" />
                </View>
            )
           
        } else {
            return (
                <View>
                    <Text style={styles.titleText}>도서관 잔여 좌석 수 </Text>
                    <TouchableOpacity
                    style={{
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        borderRadius:8,
                        paddingHorizontal:8,
                        paddingVertical:4,
                        borderWidth:0.5,
                        borderColor:'#d7d7d7',
                        backgroundColor:'#d7d7d7'
                    }}
                    onPress={this.getData}
                    >
                    <Icon name="refresh" size={normalize(14)} color='#000000'/>
                    <Text style={{fontSize:normalize(14), color:'#000000'}}> 새로고침</Text>
                    </TouchableOpacity>
                    <FlatList 
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data.row}
                        renderItem={this._renderItem}
                    />
                </View>
            )
        }
    }
}

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render () {
        return (
            <View style={styles.rowUnit}>
                <View style={styles.rowUnitLeft}>
                    <Text style={styles.rowUnitTextLeft}>{this.props.left}</Text>
                </View>
                <View style={styles.rowUnitRight}>
                    <Text style={styles.rowUnitTextRight}>{this.props.right}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        borderRadius:8,
        overflow:'hidden',
        borderWidth: 0.5,
        borderColor:'#d7d7d7',
        borderBottomWidth:0,
        marginVertical:8,
    },
    titleText: {
        color:'#334955',
        fontSize:normalize(20),
        marginBottom: 16,
        fontWeight:'bold'
    },
    rowUnit: {
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderColor:'#d7d7d7'
    },
    rowUnitLeft: {
        flex:2.5,
        paddingHorizontal:8,
        paddingVertical: 4,
        justifyContent:'center'
    },
    rowUnitRight: {
        paddingHorizontal:8,
        paddingVertical:4,
        justifyContent:'center',
        flex: 1,
        backgroundColor:'#334955'
    },
    rowUnitTextLeft: {
        fontSize:normalize(16),
        color:'#000000'
    },
    rowUnitTextRight: {
        fontSize:normalize(16),
        color:'#ffffff',
        textAlign:'center'
    }
})
import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { normalize, ListItem } from 'react-native-elements';

export default class LibrarySearchDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('search', 'none'),
    });

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => this._getData();

    _getData = async () => {
        let uri = `http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|${this.props.navigation.getParam('search')}&facet=false&max=20`;
        let res = await fetch(uri);
        let data = await res.json();
        this.setState({data});
        console.log(uri, this.state.data);
    }

    _renderItem = ({item}) => (
        <ListItem
            key={item.id}
            title={item.titleStatement}
            subtitle={item.author}
        />
    )

    render() {
        return (!this.state.data) ? (
        <View style={libdetailStyles.container}>
            <Text style={{fontSize:normalize(20), fontWeight:'100'}}> <Text style={{fontSize:normalize(32), fontWeight:'bold'}}>{this.props.navigation.getParam('search', 'none')}</Text> 에 대한 검색결과
            </Text>
        </View>
        ) : (
        <View style={libdetailStyles.container}>
            <Text style={libdetailStyles.textStyle}> <Text style={{fontSize:normalize(32)}}>{this.props.navigation.getParam('search', 'none')}</Text> 에 대한 검색결과
            </Text>
            <Text style={libdetailStyles.textStyle}>
                <Text style={{fontSize:normalize(32)}}>{this.state.data.data.totalCount}</Text> 건
            </Text>

            <FlatList 
                data={this.state.data.data.list}
                renderItem={this._renderItem}
            />
        </View>
        )
    }
}

let libdetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f7f7f7',
        paddingTop:32,
    },

    textStyle: {marginHorizontal: 8, marginTop: 4, fontSize:normalize(20), fontWeight:'100'}
})
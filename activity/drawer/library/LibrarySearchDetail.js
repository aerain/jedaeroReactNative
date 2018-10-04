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
            offset: 0,
            list: [],
        }
    }

    componentDidMount = () => this._getData();

    _getData = async () => {
        if(!this.state.totalCount || this.state.totalCount > this.state.offset) {
            try {
                let uri = `http://lib.jejunu.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|${this.props.navigation.getParam('search')}&facet=false&max=20&offset=${this.state.offset}`;
                let res = await fetch(uri);
                let data = await res.json();
                this.setState({ totalCount: data.data.totalCount})
                this.setState((previousState) => { 
                    let list = previousState.list;
                    Array.prototype.push.apply(list, data.data.list);    
                    return {
                        list,
                        offset : previousState.offset + 20
                    }
                })
                console.log(uri, this.state.list);
            } catch( err) {

            }
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            key={item.id}
            title={item.titleStatement}
            subtitle={item.author}
            titleStyle={{fontWeight:'100', fontSize:normalize(20)}}
            subtitleStyle={{fontWeight:'100', fontSize:normalize(14)}}
            containerStyle={{backgroundColor:'#f7f7f7'}}
            onPress={() => this.props.navigation.navigate('BookDetail', item)}
            chevron
        />
    )

    render() {
        // return (this.state.list!) ? (
        // <View style={libdetailStyles.container}>
        //     <Text style={{fontSize:normalize(20), fontWeight:'100'}}> <Text style={{fontSize:normalize(32), fontWeight:'bold'}}>{this.props.navigation.getParam('search', 'none')}</Text> 에 대한 검색결과
        //     </Text>
        // </View>
        // ) : 
        return (
        <View style={libdetailStyles.container}>
            <Text style={libdetailStyles.textStyle}> <Text style={{fontSize:normalize(32)}}>{this.props.navigation.getParam('search', 'none')}</Text> 에 대한 검색결과
            </Text>
            <Text style={libdetailStyles.textStyle}>
                <Text style={{fontSize:normalize(32)}}>{this.state.totalCount}</Text> 건
            </Text>

            <FlatList 
                data={this.state.list}
                renderItem={this._renderItem}
                onEndReached={this._getData}
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

    textStyle: {marginHorizontal: 8, marginBottom: 4, fontSize:normalize(20), fontWeight:'100'}
})
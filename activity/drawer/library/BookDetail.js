import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { lightText } from '../../jedaeroCSS';
import { normalize } from 'react-native-elements';

export default class BookDetail extends Component {
    static navigationOptions = {
        title: '도서상세'
    }
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        console.log(this.props.navigation.state.params);
    }

    componentDidMount = () => this._getData();

    _getData = async () => {
        let uri = `http://lib.jejunu.ac.kr/pyxis-api/1/biblios/${this.props.navigation.getParam('id')}/items`;
        let res = await fetch(uri);
        let data = await res.json();
        console.log(data.data);
        this.setState({data: data.data});
    }

    render() {
        let { getParam } = this.props.navigation;
        return (
        <ScrollView contentContainerStyle={bookdetailStyles.container} style={bookdetailStyles.container}>
            <Text style={bookdetailStyles.title}> 도서정보 </Text>
            <View style={{...bookdetailStyles.innerContainer, borderWidth: 0.5, borderColor: '#e7e7e7', overflow: 'hidden', borderRadius: 4}}>
                <BookRow left="자료유형" right={getParam('biblioType').name} />
                <BookRow style={{fontWeight:'bold'}} left="도서명" right={getParam('titleStatement')} />
                <BookRow left="저자" right={getParam('author')} />
                <BookRow left="출판" right={getParam('publication')} />
                <BookRow left="청구기호" right={getParam('branchVolumes')[0] ? getParam('branchVolumes')[0].volume : ""} />
            </View>
            <Text style={bookdetailStyles.title}>소장정보</Text>
            <StoreBook data={this.state.data} branchVolumes={getParam('branchVolumes')[0] ? getParam('branchVolumes')[0] : null}/>
        </ScrollView>
        )
    }
}
class StoreBook extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        if(this.props.data && this.props.data.length !== 0 && this.props.branchVolumes !== null) {
            return (
                <View style={bookdetailStyles.innerContainer}>
                    {
                        this.props.data[this.props.branchVolumes.id].map((item, index) => (
                            <View key={index} style={bookdetailStyles.storebook}>
                                <BookRow left="등록번호" right={item.barcode} />
                                <BookRow left="소장위치" right={item.location.name} />
                                <BookRow left="청구기호" right={item.callNo} />
                                <BookRow left="상태" right={item.circulationState !== null && item.circulationState.name !== null ? item.circulationState.name : "알 수 없음"} style={{color:(item.circulationState !== null && item.circulationState.name !== null ? (item.circulationState.name === '대출불가' ? 'red' : 'green') : 'red')}}/>
                            </View>
                        ))
                    }
                </View>
                
            )
        } else {
            return (<Text style={{...bookdetailStyles.text, fontSize:normalize(18), lineHeight:normalize(18) * 1.5, textAlign:'center'}}>소장 정보 없음</Text>);
        }
    }
}
class BookRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flexDirection:'row', backgroundColor:'#ffffff'}}>
                <View style={{flex:1, padding: 8}}>
                    <Text style={{...bookdetailStyles.text, textAlign:'right'}}>{this.props.left}</Text>
                </View>
                <View style={{flex:3, padding: 8}}>
                    <Text style={{...bookdetailStyles.text, ...this.props.style}}>{this.props.right}</Text>
                </View>
            </View>
            
        )
    }
}

let bookdetailStyles = StyleSheet.create({
    container: {
        backgroundColor:'#f7f7f7',
        paddingTop:16,
        paddingHorizontal:8,
        paddingBottom: 56,
        
    },
    title: {
        fontSize:normalize(24),
        lineHeight: normalize(24) * 1.5,
        ...lightText,
        marginBottom:16,
    },
    innerContainer: {
        marginBottom:16,
        justifyContent: 'center',
        // borderRadius: 4,
        // borderColor: '#e7e7e7',
        // borderWidth: 0.5,
        // overflow: 'hidden',
    },
    text: {
        ...lightText,
        fontSize: normalize(14),
        lineHeight: normalize(14) * 1.5,
    },
    storebook: {
        borderWidth: 0.5,
        borderColor: '#e7e7e7',
        marginBottom: 16,
        borderRadius: 4
    }
});
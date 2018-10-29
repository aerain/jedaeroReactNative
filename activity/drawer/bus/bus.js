import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { normalize } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Bus extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => {
        return {
            headerTitle: '순환버스',
        } 
    }


    
    render = () => {
        let d = new Date();
        console.log(d);
        return (
            <View style={{flex:1, backgroundColor:'#f7f7f7'}}>
                <ScrollView>
                    <View style={styles.foodBlock}>
                        <View style={styles.foodBlockTitle}>
                            <Text style={styles.foodBlockTitleText}>즐겨찾기된 정류장</Text>
                            <TouchableOpacity
                                onPress={this.props.onRefresh}
                            >
                                <Icon name="refresh" color="#ffffff" size={normalize(16)} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            <Text style={styles.foodBlockContainerText}>{this.props.food}</Text>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            <Text style={styles.foodBlockContainerText}>{this.props.food}</Text>
                        </View>
                    </View>
                    <FoodBlock name="오늘의 학식" food="입니다." onRefresh={() => {}}/>
                    <FoodBlock name="오늘의 기숙사" food="입니다." onRefresh={() => {}}/>
                </ScrollView>
            </View>
            
            
        )
    }
}

class FoodBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.foodBlock}>
                <View style={styles.foodBlockTitle}>
                    <Text style={styles.foodBlockTitleText}>{this.props.name}</Text>
                    <TouchableOpacity
                        onPress={this.props.onRefresh}
                    >
                        <Icon name="refresh" color="#ffffff" size={normalize(16)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodBlockContainer}>
                    <Text style={styles.foodBlockContainerText}>{this.props.food}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foodBlock: {
        borderBottomWidth:0.5,
        borderBottomColor:'#d7d7d7',
        marginBottom:16
    },
    foodBlockTitle: {
        backgroundColor:'#334955',
        paddingHorizontal:16,
        paddingVertical:8,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    foodBlockTitleText: {
        color:'#ffffff',
        fontSize:normalize(16),
        
    },
    foodBlockContainer: {
        backgroundColor:'#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    foodBlockContainerText: {
        textAlign:'center'
    }
})
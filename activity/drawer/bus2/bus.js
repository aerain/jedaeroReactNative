import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { normalize } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import BusTime from '../../../jsons/busschedule.json';

// function timeTb(time, index) {
//     var gettime = time.split(':');
//     gettime[1]=Number(gettime[1])+index;
//     gettime[1]=`0${String(gettime[1])}`; 
//     return `${gettime[0]}:${gettime[1].substring(gettime[1].length-2,gettime[1].length)}:${gettime[2]}`
// }
//이거 버려도될듯? ㅋㅋㅋ
function settimeTb(timeTable) {
    var thistime = new Date();
    for(i=0; i<timeTable.length; i++){
        var a = timeTable[i];
        slice = a.split(':');
        if(Number(slice[0]) - thistime.getHours<0){
            if(Number(slice[1] - thistime.getMinutes<0)){
                
            }
            else{
                return i;
            }
        }
        else{
            return i; 
        }
    }
}

function lefttime(params,index) {
    var slicetime = params.split(':');
    var thistime = new Date(); //현재시간 
    var minutes = Number(slicetime[1]) - thistime.getMinutes();
    
    var hours = Number(slicetime[0]) - thistime.getHours();
    if(minutes<0){
        minutes = 60 + minutes;
        hours = hours-1
    }
    if(hours<0){
        hours = 24+hours;
    }
    return `${hours}시간 ${minutes+index}분 남았다`;
}

export default class Bus extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => {
        return {
            headerTitle: '버스시간표^오^',
        } 
    }
    
    render = () => {
        return (
            <View style={{flex:1, backgroundColor:'#f7f7f7'}}>
                <ScrollView>
                    <View style={styles.foodBlock}>
                        <View style={styles.foodBlockTitle}>
                            <Text style={styles.foodBlockTitleText}>노선A 남은시간</Text>
                            <TouchableOpacity
                                onPress={this.props.onRefresh}
                            >
                                <Icon name="refresh" color="#ffffff" size={normalize(16)} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            {
                            
                                BusTime.routeName.A.map((item,index) => (
                                    <Text style={styles.foodBlockContainerText}>
                                        {item } : {lefttime(BusTime.timeTable.A[settimeTb(BusTime.timeTable.A)],index)}
                                    </Text>
                                ))
                            }
                        </View>
                        <View style={styles.foodBlockTitle}>
                            <Text style={styles.foodBlockTitleText}>노선A 남은시간</Text>
                                <TouchableOpacity
                                    onPress={this.props.onRefresh}
                                >
                                    <Icon name="refresh" color="#ffffff" size={normalize(16)} />
                                </TouchableOpacity>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            {
                            
                                BusTime.routeName.A.map((item,index) => (
                                    <Text style={styles.foodBlockContainerText}>{item } : {lefttime(BusTime.timeTable.A[settimeTb(BusTime.timeTable.A)],index)}</Text>
                                ))
                            }
                        </View>
                    </View>
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
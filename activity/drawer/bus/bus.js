import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform, AsyncStorage, Button } from 'react-native';
import { normalize } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import HaksikAPI from '../../JedaeroAPI/HaksikAPI';
import DormitoryAPI from '../../JedaeroAPI/DormitoryAPI';
import getWeek from '../../../tool/getWeek';

export default class Bus extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    static navigationOptions = () => {
        return {
            headerTitle: '홈',
        } 
    }

    getHaksik = async (isRefresh = false) => {
        let haksikItem = await AsyncStorage.getItem('storedHaksik');
        let week = getWeek(new Date());
        if(isRefresh || haksikItem === null) {
            let data = await HaksikAPI();
            await AsyncStorage.setItem('storedHaksikWeek', week.toString());
            await AsyncStorage.setItem('storedHaksik', JSON.stringify(data));
            haksikItem = await AsyncStorage.getItem('storedHaksik');
        }
        let haksikJson = JSON.parse(haksikItem);
        this.setState({haksik: haksikJson})
    }

    getDormitory = async (isRefresh = false) => {
        let dormitoryItem = await AsyncStorage.getItem('storedDormitory');
        let week = getWeek(new Date());
        if(isRefresh || dormitoryItem === null) {
            let data = await DormitoryAPI();
            await AsyncStorage.setItem('storedDormitoryWeek', week.toString());
            await AsyncStorage.setItem('storedDormitory', JSON.stringify(data));
            dormitoryItem = await AsyncStorage.getItem('storedDormitory');
        }
        let dormitoryJson = JSON.parse(dormitoryItem);
        this.setState({dormitory: dormitoryJson});
    }
    componentDidMount = async () => {
        this.getHaksik();
        this.getDormitory();
    }
    render = () => {
        return (
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
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
                            <Text style={styles.foodBlockContainerText}>정문따리</Text>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            <Text style={styles.foodBlockContainerText}>중도따리</Text>
                        </View>
                    </View>
                    <FoodBlock name="오늘의 학식" food={this.state.haksik} onRefresh={() => this.getHaksik(true)}/>
                    <DormBlock name="오늘의 기숙사" food={this.state.dormitory} onRefresh={() => this.getDormitory(true)}/>
                    <Button onPress={() => this.props.navigation.navigate('Detail')} title="바보냐"/>
                </ScrollView>
            </View>
            
            
        )
    }
}
class DormBlock extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps, '입니다');
        this.buildData(nextProps.food);
    }

    buildData = (meal) => {
        if(meal) {
            let currentDate = new Date();
            currentDate = currentDate.getDay();
            let food;
            console.log('오늘의 날은', currentDate, meal);
            switch(currentDate) {
                case 1:
                    food = meal.mealMon;
                    break;
                case 2:
                    food = meal.mealTue;
                    break;
                case 3:
                    food = meal.mealWed;
                    break;
                case 4:
                    food = meal.mealThu;
                    break;
                case 5:
                    food = meal.mealFri;
                    break;
                case 6:
                    food = meal.mealSat ? meal.mealSat : meal.mealMon;
                    break;
                case 0:
                    food = meal.mealSun ? meal.mealSun : meal.mealMon;
                default:
                    food = meal.mealMon;
                    break;
            }
            let dawn = food.dawn.split(',\r\n');
            let breakfast = food.breakfast.split(',\r\n');
            let lunch = food.lunch.split(',\r\n');
            let dinner = food.dinner.split(',\r\n');
            this.setState({food: {
                dawn: dawn.join(' '),
                breakfast: breakfast.join(' '),
                lunch: lunch.join(' '),
                dinner: dinner.join(' ')
            }});
    
        }
        
    }

    componentDidMount = () => {
        this.buildData(this.props.food);
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
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>조기 </Text>{this.state.food? this.state.food.dawn : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>아침 </Text>{this.state.food? this.state.food.breakfast : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>점심 </Text>{this.state.food? this.state.food.lunch : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>저녁 </Text>{this.state.food? this.state.food.dinner : '없어요'}</Text>
                </View>
            </View>
        )
    }
}

class FoodBlock extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps, '입니다');
        this.buildData(nextProps.food);
    }

    buildData = (meal) => {
        if(meal) {
            let currentDate = new Date();
            currentDate = currentDate.getDay();
            let food;
            console.log('오늘의 날은', currentDate, meal);
            switch(currentDate) {
                case 1:
                    food = meal.mealMon;
                    break;
                case 2:
                    food = meal.mealTue;
                    break;
                case 3:
                    food = meal.mealWed;
                    break;
                case 4:
                    food = meal.mealThu;
                    break;
                case 5:
                    food = meal.mealFri;
                    break;
                case 6:
                    food = meal.mealSat ? meal.mealSat : meal.mealMon;
                    break;
                case 0:
                    food = meal.mealSun ? meal.mealSun : meal.mealMon;
                default:
                    food = meal.mealMon;
                    break;
            }

            let combo = food.combo.split("\n");
            let special = food.special.split("\n");
            let dinner = food.dinner.split("\n");
            let western = food.western.split("\n");

            this.setState({food: {
                combo: combo.join(' '),
                special: special.join(' '),
                dinner: dinner.join(' '),
                western: western.join(' ')
            }});
            
        }
        
    }

    componentDidMount = () => {
        this.buildData(this.props.food);
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
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>정식 </Text>{this.state.food? this.state.food.combo : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>특식 </Text>{this.state.food? this.state.food.special : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>양식 </Text>{this.state.food? this.state.food.western : '없어요'}</Text>
                    <Text numberOfLines={1} style={styles.foodBlockContainerText}><Text style={styles.foodBlockContainerLeft}>저녁 </Text>{this.state.food? this.state.food.dinner : '없어요'}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foodBlock: {
        borderWidth:0.5,
        borderColor:'#d7d7d7',
        marginBottom:16,
        marginHorizontal:8,
        borderRadius:8,
        overflow:'hidden',
        elevation: 5,
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
        lineHeight:normalize(16),
        color:'#000000'
    },
    foodBlockContainerLeft: {
        color:'#334955',
        fontWeight:'bold',
    }
})
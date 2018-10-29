import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Platform, AsyncStorage } from 'react-native';
import { normalize } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
    componentDidMount = async () => {
        let haksikItem = await AsyncStorage.getItem('storedHaksik');
        let haksikJson = JSON.parse(haksikItem);
        this.setState({haksik : haksikJson});
        console.log(this.state.haksik);
    }
    render = () => {
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
                            <Text style={styles.foodBlockContainerText}>정문따리</Text>
                        </View>
                        <View style={styles.foodBlockContainer}>
                            <Text style={styles.foodBlockContainerText}>중도따리</Text>
                        </View>
                    </View>
                    <FoodBlock name="오늘의 학식" food={this.state.haksik} onRefresh={() => {}}/>
                    {/* <FoodBlock name="오늘의 기숙사" food="입니다." onRefresh={() => {}}/> */}
                </ScrollView>
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
            food = JSON.parse(JSON.stringify(food).replace(/\r\n/gi, " "));
            console.log(food);
            this.setState({food});
    
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
                    <Text style={styles.foodBlockContainerText}>{this.state.food? this.state.food.combo : '없어요'}</Text>
                    <Text style={styles.foodBlockContainerText}>{this.state.food? this.state.food.special : '없어요'}</Text>
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
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Platform, AsyncStorage, RefreshControl } from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';
import haksikCrawl from '../../../JedaeroAPI/HaksikAPI'
import { foodTabNavStyles, menuTopTabOptions } from '../../../jedaeroCSS';
import getWeek from '../../../../tool/getWeek';

class Haksik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: null,
            refreshing: false,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({meal: nextProps.meal});
    }
    render = () => {
        if(this.state.meal === null) {
            return (
              <View style={{alignItems: 'center', paddingTop:20, flex:1, backgroundColor:'#f7f7f7'}}>
                <ActivityIndicator size='large' color='#344955'/>
              </View>
            )
        } else {
            return (
              <ScrollView 
                style={foodTabNavStyles.container}
                refreshControl= {
                    <RefreshControl 
                        refreshing={this.state.refreshing}
                        onRefresh={async () => {
                            this.setState({refreshing: true});
                            await this.props.onRefresh();
                            this.setState({refreshing: false});
                        }}
                    />
                }
              >
                <HaksikList title="정식" food={this.state.meal.combo}/>
                <HaksikList title="특식" food={this.state.meal.special}/>
                <HaksikList title="양식" food={this.state.meal.western}/>
                <HaksikList title="중식" food={this.state.meal.chinese}/>
                <HaksikList title="정식 저녁" food={this.state.meal.dinner}/>
              </ScrollView>
            )
          }
    }
}

class HaksikList extends Component {
    render() {
      return (
        <View style={{margin: 8, backgroundColor:'#ffffff', borderTopLeftRadius:4, borderTopRightRadius:4}}>
          <TouchableOpacity style={foodTabNavStyles.list} activeOpacity={0.8}>
            <View style={foodTabNavStyles.foodlistContainer}>
              <Text style={foodTabNavStyles.foodlistTitle}>{this.props.title}</Text>
            </View>
            <View style={foodTabNavStyles.subContainer}>
              <Text style={foodTabNavStyles.foodlist}>{this.props.food}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

let HaksikTabNavigator = createMaterialTopTabNavigator({
    HaksikMon: {
        screen: props => <Haksik DoW="mon" navigation={props.navigation} meal={props.screenProps.meal.mealMon} onRefresh={props.screenProps.onRefresh} />,
        navigationOptions: {
            title:'월'
        }
    }, 
    HaksikTue: {
        screen: props => <Haksik DoW="tue" navigation={props.navigation} meal={props.screenProps.meal.mealTue} onRefresh={props.screenProps.onRefresh}/>,
        navigationOptions: {
            title:'화'
        }
    }, 
    HaksikWed: {
        screen: props => <Haksik DoW="wed" navigation={props.navigation} meal={props.screenProps.meal.mealWed} onRefresh={props.screenProps.onRefresh}/>,
        navigationOptions: {
            title:'수'
        }
    }, 
    HaksikThu: {
        screen: props => <Haksik DoW="thu" navigation={props.navigation} meal={props.screenProps.meal.mealThu} onRefresh={props.screenProps.onRefresh}/>,
        navigationOptions: {
            title:'목'
        }
    }, 
    HaksikFri: {
        screen: props => <Haksik DoW="fri" navigation={props.navigation} meal={props.screenProps.meal.mealFri} onRefresh={props.screenProps.onRefresh}/>,
        navigationOptions: {
            title:'금'
        }
    }, 
}, menuTopTabOptions);

export default class HakSikMain extends Component {
    static router = HaksikTabNavigator.router;
    static navigationOptions = {
        headerTitle: '백두관 식당',
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    componentDidMount = () => {
        var currentWeek = getWeek(new Date()).toString();
        this.getData.bind(this)(currentWeek);
    };

    onRefresh = async (currentWeekToString) => {
        var crawl = await haksikCrawl();
        // this.setState({ data }, () => console.log(this.state.data, '입니다. '));
        await AsyncStorage.setItem('storedHaksikWeek', currentWeekToString);
        await AsyncStorage.setItem('storedHaksik', JSON.stringify(crawl));
        var data = await AsyncStorage.getItem('storedHaksik');
        this.setState({data: JSON.parse(data)});
        console.log(this.state.data);
    }

    getData = async (currentWeek = -1) => {
        // this.setState({data: {}});
        var currentWeekToString = currentWeek.toString();
        var storedWeek = await AsyncStorage.getItem('storedHaksikWeek');
        if(currentWeek === -1 || storedWeek == null || storedWeek !== currentWeekToString) {
            await this.onRefresh(currentWeekToString);
        } else {
            let data = await AsyncStorage.getItem('storedHaksik');
            this.setState({data: JSON.parse(data)});
        }
        
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'#f7f7f7'}} forceInset={{bottom: 'never'}}>
                <HaksikTabNavigator navigation={this.props.navigation} screenProps={{ meal: this.state.data, onRefresh: () => {this.onRefresh(getWeek(new Date()).toString())} }}/>
            </SafeAreaView>
        )
    }
}


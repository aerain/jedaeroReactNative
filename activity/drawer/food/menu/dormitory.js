import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, AsyncStorage, RefreshControl } from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';
import DormitoryAPI from '../../../JedaeroAPI/DormitoryAPI';
import { foodTabNavStyles, menuTopTabOptions } from '../../../jedaeroCSS';
import getWeek from '../../../../tool/getWeek';

class Dorm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null,
      refreshing: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({meal: nextProps.meal})
  }
  
  render = () => {
    if (this.state.meal === null) {
      return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 20, backgroundColor:'#f7f7f7' }}>
          <ActivityIndicator size='large' color='#344955' />
        </View>
      )
    } else {
      return (
        <ScrollView style={foodTabNavStyles.container}
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
          <DormList title="조기" food={this.state.meal.dawn} />
          <DormList title="아침" food={this.state.meal.breakfast} />
          <DormList title="점심" food={this.state.meal.lunch} />
          <DormList title="저녁" food={this.state.meal.dinner} />
        </ScrollView>
      )
    }
  }
}

class DormList extends Component {
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

let DormTap = createMaterialTopTabNavigator(
  {
    dormMon: {
      screen: (props) => <Dorm DoW="mon" navigation={props.navigation} meal={props.screenProps.meal.mealMon} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "월"
      }
    },
    dormTue: {
      screen: (props) => <Dorm DoW="tue" navigation={props.navigation} meal={props.screenProps.meal.mealTue} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "화"
      }
    },
    dormWed: {
      screen: (props) => <Dorm DoW="wed" navigation={props.navigation} meal={props.screenProps.meal.mealWed} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "수"
      }
    },
    dormThu: {
      screen: (props) => <Dorm DoW="thu" navigation={props.navigation} meal={props.screenProps.meal.mealThu} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "목"
      }
    },
    dormFri: {
      screen: (props) => <Dorm DoW="fri" navigation={props.navigation} meal={props.screenProps.meal.mealFri} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "금"
      }
    },
    dormSat: {
      screen: (props) => <Dorm DoW="sat" navigation={props.navigation} meal={props.screenProps.meal.mealSat} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "토"
      }
    },
    dormSun: {
      screen: (props) => <Dorm DoW="sun" navigation={props.navigation} meal={props.screenProps.meal.mealSun} onRefresh={props.screenProps.onRefresh}/>,
      navigationOptions: {
        title: "일"
      }
    }
  }, menuTopTabOptions
);

export default class DormitoryMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  static router = DormTap.router;

  componentDidMount = () => {
    var currentWeek = getWeek(new Date()).toString();
    this.getData.bind(this)(currentWeek);
  };

  onRefresh = async (currentWeekToString) => {
    var crawl = await DormitoryAPI();
    await AsyncStorage.setItem('storedDormitoryWeek', currentWeekToString);
    await AsyncStorage.setItem('storedDormitory', JSON.stringify(crawl));
    var data = await AsyncStorage.getItem('storedDormitory');
    this.setState({data: JSON.parse(data)});
    console.log(this.state.data);
  }

  getData = async (currentWeek = -1) => {
    var currentWeekToString = currentWeek.toString();
    var storedWeek = await AsyncStorage.getItem('storedDormitoryWeek');
    if(currentWeek === -1 || storedWeek == null || storedWeek != currentWeekToString) {
      await this.onRefresh(currentWeekToString);
    } else {
      let data = await AsyncStorage.getItem('storedDormitory');
      this.setState({data: JSON.parse(data)})
    }
  }

  render = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'#f7f7f7'}} forceInset={{bottom:'never'}}>
        <DormTap navigation={this.props.navigation} screenProps={{meal: this.state.data, onRefresh: () => {this.onRefresh(getWeek(new Date()).toString())}}}/>
      </SafeAreaView>
    )
  }
}
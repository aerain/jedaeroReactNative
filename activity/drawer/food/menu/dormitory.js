import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView,} from 'react-native';
import { normalize } from 'react-native-elements';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';

import DormitoryAPI from '../../../JedaeroAPI/DormitoryAPI';

class Dorm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({meal: nextProps.meal})
  }
  
  render = () => {
    if (this.state.meal === null) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 20, backgroundColor:'#f7f7f7' }}>
          <ActivityIndicator size='large' color='#344955' />
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
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
      <View elevation={4} style={{margin: 8, backgroundColor:'#ffffff', borderTopLeftRadius:4, borderTopRightRadius:4}}>
        <TouchableOpacity style={styles.list} activeOpacity={0.8}>
          <View elevation={4} style={styles.foodlistContainer}>
            <Text style={styles.foodlistTitle}>{this.props.title}</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.foodlist}>{this.props.food}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

let DormTap = createMaterialTopTabNavigator(
  {
    dormMon: {
      screen: (props) => <Dorm DoW="mon" navigation={props.navigation} meal={props.screenProps.meal.mealMon}/>,
      navigationOptions: {
        title: "월"
      }
    },
    dormTue: {
      screen: (props) => <Dorm DoW="tue" navigation={props.navigation} meal={props.screenProps.meal.mealTue}/>,
      navigationOptions: {
        title: "화"
      }
    },
    dormWed: {
      screen: (props) => <Dorm DoW="wed" navigation={props.navigation} meal={props.screenProps.meal.mealWed}/>,
      navigationOptions: {
        title: "수"
      }
    },
    dormThu: {
      screen: (props) => <Dorm DoW="thu" navigation={props.navigation} meal={props.screenProps.meal.mealThu}/>,
      navigationOptions: {
        title: "목"
      }
    },
    dormFri: {
      screen: (props) => <Dorm DoW="fri" navigation={props.navigation} meal={props.screenProps.meal.mealFri}/>,
      navigationOptions: {
        title: "금"
      }
    },
    dormSat: {
      screen: (props) => <Dorm DoW="sat" navigation={props.navigation} meal={props.screenProps.meal.mealSat}/>,
      navigationOptions: {
        title: "토"
      }
    },
    dormSun: {
      screen: (props) => <Dorm DoW="sun" navigation={props.navigation} meal={props.screenProps.meal.mealSun}/>,
      navigationOptions: {
        title: "일"
      }
    }
  }, {
    backBehavior: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon:false,
        activeTintColor: "#344955",
        inactiveTintColor:'#aaaaaa',
        tabStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        labelStyle: {
            fontSize: normalize(20),
            fontFamily: 'NotoSansCJKkr-Regular'
        },
        style: {
          backgroundColor:'#f7f7f7',
          borderTopWidth:0.5,
          borderTopColor:'#d7d7d7'
        },
        indicatorStyle: {
          marginBottomWidth:0,
          height:0
        },
    },

  }
);

export default class DormitoryMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  static router = DormTap.router;

  componentDidMount = () => this.getData.bind(this)();

  getData = () => {
    DormitoryAPI()
    .then(data => {
      this.setState({data});
    })
  }

  render = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'#f7f7f7'}} forceInset={{bottom:'always'}}>
        <DormTap navigation={this.props.navigation} screenProps={{meal: this.state.data}}/>
      </SafeAreaView>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f7f7f7'
  },
  title: {
    justifyContent:'center',
    alignItems:'center'
  },
  foodlist: {fontSize:normalize(16), textAlign:'center', fontFamily:'NotoSansCJKkr-Regular'},
  foodlistContainer: {
    backgroundColor:'#344955',
    borderTopLeftRadius:4,
    borderTopRightRadius:4
  },
  foodlistTitle: {
    textAlign:'center',
    fontSize: normalize(20),
    fontFamily: 'NotoSansCJKkr-Regular',
    color:'white'
  },
  subContainer: {
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:'#d7d7d7',
  }
});
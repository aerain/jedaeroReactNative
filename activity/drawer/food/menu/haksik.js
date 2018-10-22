import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';
import { normalize } from 'react-native-elements';
import haksikCrawl from '../../../JedaeroAPI/HaksikAPI'
import { foodTabNavStyles, menuTopTabOptions } from '../../../jedaeroCSS';

class Haksik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: null,
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
              <ScrollView style={foodTabNavStyles.container}>
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
        screen: props => <Haksik DoW="mon" navigation={props.navigation} meal={props.screenProps.meal.mealMon}/>,
        navigationOptions: {
            title:'월'
        }
    }, 
    HaksikTue: {
        screen: props => <Haksik DoW="tue" navigation={props.navigation} meal={props.screenProps.meal.mealTue}/>,
        navigationOptions: {
            title:'화'
        }
    }, 
    HaksikWed: {
        screen: props => <Haksik DoW="wed" navigation={props.navigation} meal={props.screenProps.meal.mealWed}/>,
        navigationOptions: {
            title:'수'
        }
    }, 
    HaksikThu: {
        screen: props => <Haksik DoW="thu" navigation={props.navigation} meal={props.screenProps.meal.mealThu}/>,
        navigationOptions: {
            title:'목'
        }
    }, 
    HaksikFri: {
        screen: props => <Haksik DoW="fri" navigation={props.navigation} meal={props.screenProps.meal.mealFri}/>,
        navigationOptions: {
            title:'금'
        }
    }, 
}, menuTopTabOptions);

export default class HakSikMain extends Component {
    static router = HaksikTabNavigator.router;

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount = () => this.getData.bind(this)();

    getData = () => {
        haksikCrawl()
        .then(data => {
            this.setState({ data }, () => console.log(this.state.data, '입니다. '));
        })        
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'#f7f7f7'}} forceInset={{bottom: 'always'}}>
                <HaksikTabNavigator navigation={this.props.navigation} screenProps={{ meal: this.state.data }}/>
            </SafeAreaView>
        )
    }
}


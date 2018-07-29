import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView,} from 'react-native';
import { normalize } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import cheerio from 'cheerio-without-node-native';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';
import RNFetchBlob from 'rn-fetch-blob';

class Dorm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => this.DormCrawl();

  DormCrawl = async () => {
    let uri = 'http://dormitory.neo-internet.co.kr/';
    let data = new Object();
    try {
      let res = await RNFetchBlob.fetch('GET',uri + "board/adm/Recipe/restaurant.php");
      let strbase64 = new Buffer(res.data, 'base64');
      let resBody = iconv.decode(strbase64, 'EUC-KR').toString();
      let $ = cheerio.load(resBody);
      {
        data['title'] = '기숙사 식당';
        countday = 0;
        countmenu = 0;
        $('.wanted > tbody > tr > td').each(function() {
          TempText = $(this).text();
          locateNumber = 'dormitory' + countday + '_' + countmenu;
          data[locateNumber] = TempText;

          countmenu++;
          if (countmenu % 6 === 0){
            countmenu = 1;
            countday++;
          }
        });

        console.log(data);

        switch (this.props.DoW) {
          case "mon":
            this.setState({
              meal: {
                dawn : data.dormitory1_1,
                breakfast : data.dormitory1_2,
                lunch: data.dormitory1_3,
                dinner: data.dormitory1_4,
              }
            })
            break;
          case "tue":
            this.setState({
              meal: {
                dawn : data.dormitory2_1,
                breakfast : data.dormitory2_2,
                lunch: data.dormitory2_3,
                dinner: data.dormitory2_4,
              }
            })
            break;
          case "wed":
            this.setState({
              meal: {
                dawn : data.dormitory3_1,
                breakfast : data.dormitory3_2,
                lunch: data.dormitory3_3,
                dinner: data.dormitory3_4,
              }
            })
            break;
          case "thu":
            this.setState({
              meal: {
                dawn : data.dormitory4_1,
                breakfast : data.dormitory4_2,
                lunch: data.dormitory4_3,
                dinner: data.dormitory4_4,
              }
            })
              break;
          case "fri":
            this.setState({
              meal: {
                dawn : data.dormitory5_1,
                breakfast : data.dormitory5_2,
                lunch: data.dormitory5_3,
                dinner: data.dormitory5_4,
              }
            })
            break;
            case "sat":
            this.setState({
              meal: {
                dawn : data.dormitory6_1,
                breakfast : data.dormitory6_2,
                lunch: data.dormitory6_3,
                dinner: data.dormitory6_4,
              }
            })
            break;
            case "sun":
            this.setState({
              meal: {
                dawn : data.dormitory7_1,
                breakfast : data.dormitory7_2,
                lunch: data.dormitory7_3,
                dinner: data.dormitory7_4,
              }
            })
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  render = () => {
    if (!this.state.meal) {
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

let DormTap = createBottomTabNavigator(
  {
    dormMon: {
      screen: (props) => <Dorm DoW="mon" />,
      navigationOptions: {
        title: "월"
      }
    },
    dormTue: {
      screen: (props) => <Dorm DoW="tue" />,
      navigationOptions: {
        title: "화"
      }
    },
    dormWed: {
      screen: (props) => <Dorm DoW="wed" />,
      navigationOptions: {
        title: "수"
      }
    },
    dormThu: {
      screen: (props) => <Dorm DoW="thu" />,
      navigationOptions: {
        title: "목"
      }
    },
    dormFri: {
      screen: (props) => <Dorm DoW="fri" />,
      navigationOptions: {
        title: "금"
      }
    },
    dormSat: {
      screen: (props) => <Dorm DoW="sat" />,
      navigationOptions: {
        title: "토"
      }
    },
    dormSun: {
      screen: (props) => <Dorm DoW="sun" />,
      navigationOptions: {
        title: "일"
      }
    }
  }, {
    backBehavior: 'none',
    tabBarOptions: {
        showIcon:false,
        activeTintColor: "#344955",
        tabStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        labelStyle: {
            fontSize: normalize(20),
            fontFamily: 'NotoSansCJKkr-Regular'
        },
    },

  }
);

export default class print extends Component {
  constructor(props) {
    super(props);
  }
  static router = DormTap.router;

  render = () => {
    return <DormTap navigation={this.props.navigation} />
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
    borderColor:'#929292',
  }
});
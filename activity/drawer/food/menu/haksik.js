import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { normalize } from 'react-native-elements';
import RNFetchBlob from 'rn-fetch-blob';
import cheerio from 'cheerio-without-node-native';

class Haksik extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => this.haksikCrawl();
   
    haksikCrawl = async () => {
        let uri = 'http://www.jejunu.ac.kr/camp/stud/foodmenu'
        let data = new Object();
        try {
          let res = await RNFetchBlob.fetch('GET', uri);
          let $ = cheerio.load(res.text());
          {
            data['title'] = '백두관 식당';
            countday = 1;
            countmenu = 1;
            $('td.border_right.border_bottom.txt_center').each(function() {
                TempText = $(this).text().substring(1).trim();
                locateNumber = 'baekdu' + countday + "_" + countmenu;
                data[locateNumber] = TempText;
                countmenu++;
                if (countmenu % 14 === 0){
                countmenu = 1;
                countday++;
                }
            });
            switch (this.props.DoW) {
              case "mon":
                this.setState({
                  meal: {
                    combo : data.baekdu1_3,
                    dinner : data.baekdu1_4,
                    special: data.baekdu1_6,
                    western: data.baekdu1_9,
                    chinese : data.baekdu1_12,
                  }
                })
                break;
              case "tue":
                this.setState({
                  meal: {
                    combo : data.baekdu2_3,
                    dinner : data.baekdu2_4,
                    special: data.baekdu2_6,
                    western: data.baekdu2_9,
                    chinese : data.baekdu2_12,
                  }
                })
                break;
              case "wed":
                this.setState({
                  meal: {
                    combo : data.baekdu3_3,
                    dinner : data.baekdu3_4,
                    special: data.baekdu3_6,
                    western: data.baekdu3_9,
                    chinese : data.baekdu3_12,
                  }
                })
                break;
              case "thu":
                this.setState({
                  meal: {
                    combo : data.baekdu4_3,
                    dinner : data.baekdu4_4,
                    special: data.baekdu4_6,
                    western: data.baekdu4_9,
                    chinese : data.baekdu4_12,
                  }
                })
                  break;
              case "fri":
                this.setState({
                  meal: {
                    combo : data.baekdu5_3,
                    dinner : data.baekdu5_4,
                    special: data.baekdu5_6,
                    western: data.baekdu5_9,
                    chinese : data.baekdu5_12,
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
        if(!this.state.meal) {
            return (
              <View style={{alignItems: 'center', paddingTop:20, flex:1, backgroundColor:'#f7f7f7'}}>
                <ActivityIndicator size='large' color='#344955'/>
              </View>
            )
          } else {
            return (
              <ScrollView style={styles.container}>
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

let HaksikTabNavigator = createBottomTabNavigator({
    HaksikMon: {
        screen: props => <Haksik DoW="mon" navigation={props.navigation} />,
        navigationOptions: {
            title:'월'
        }
    }, 
    HaksikTue: {
        screen: props => <Haksik DoW="tue" navigation={props.navigation} />,
        navigationOptions: {
            title:'화'
        }
    }, 
    HaksikWed: {
        screen: props => <Haksik DoW="wed" navigation={props.navigation} />,
        navigationOptions: {
            title:'수'
        }
    }, 
    HaksikThu: {
        screen: props => <Haksik DoW="thu" navigation={props.navigation} />,
        navigationOptions: {
            title:'목'
        }
    }, 
    HaksikFri: {
        screen: props => <Haksik DoW="fri" navigation={props.navigation} />,
        navigationOptions: {
            title:'금'
        }
    }, 
}, {
    tabBarOptions: {
        showIcon: false,
        tabStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        labelStyle: {
            fontSize:normalize(20),
        },
        activeTintColor:'#344955'
    },
    backBehavior: 'none'
});

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



export default HaksikTabNavigator;
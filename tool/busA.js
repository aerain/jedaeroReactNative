import moment from 'moment'
import {AsyncStorage} from 'react-native';

/* 버스 도착시간 계산 알고리즘  */

export default function daycheck(timeTable, route) {
    var a = moment();
    var day = a.day();
    // 0:일요일 ~ 6:토요일 즉,주말일때 운행없음
    if(day === 0 || day === 6) { 
       return "운행없어요.."
    //    return busA(timeTable, route);
    }
    else { 
       return busA(timeTable, route);
    }
}

// _storeData = async (i) => {
//     try {
//       await AsyncStorage.setItem(i);
//     } catch (error) {
//       // Error saving data
//     }
//   };

//   _retrieveData = async (i) => {
//     try {
//       const value = await AsyncStorage.getItem(i);
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };


function busA(timeTable, route ,i){
    var thistime = new Date();
    for(i=0; i<timeTable.length; i++){
        var a = timeTable[i];
        slice = a.split(':');
        var time_set_sec = 0;
        timetb_set_sec = Number(slice[0]*60*60)+Number(slice[1]*60)+Number(slice[2])
        this_time_sec = thistime.getHours()*60*60+thistime.getMinutes()*60+thistime.getSeconds()
        hours = parseInt((timetb_set_sec-this_time_sec)/3600)
        minutes = parseInt((timetb_set_sec-this_time_sec)%3600/60) + route
        if(minutes >= 60){
            hours +=  parseInt(minutes/60);
            minutes = parseInt(minutes%60);
        }
        if(timetb_set_sec > this_time_sec){
            return `${hours}시간 ${minutes}분 전`
        }
    }
    return "운행 종료"

    

    //     var thistime = moment().format('kk:mm:ss');
    
//     for(i=0; i<timeTable.length; i++){
//         var a = moment(timeTable[i],'kk:mm:ss').format('kk:mm:ss');
//         var result = moment(thistime,'kk:mm:ss').diff(moment(a,'kk:mm:ss'));
//         var b = moment.duration(result);
//         var s =  Math.floor(b.asHours()) + moment.utc(result).format(":mm:ss");
//         if(s > 0 )
//         {
//             //TODO Logic (Asyncstorage)
//             // return "ㅂ2";
            
//         }
//         else {
//             return  s;
//         }
//     }
//     return "운행종료";
// }
}
// function bus2(timetable) {
    
//     var thistime = new Date();
//     for(i=0; i<timeTable.length; i++){
//         var a = timeTable[i];
//         slice = a.split(':');
//         if(Number(slice[0]) > thistime.getHours()){
//             // if(Number(slice[1]) >= thistime.getMinutes()){
//                 return result_time(timeTable[i]);
//             // }
            
//         }else if(slice[0]=== thistime.getHours()){
//             if(Number(slice[1])>thistime.getHours()){
//                 return result_time(timeTable[i],1);
//             }
//         }  
//     }
//     return "운행 종료"
// }



function result_time(params,im) {
    var slicetime = params.split(':');
    var thistime = new Date(); //현재시간 
    var hours = Number(slicetime[0]) - thistime.getHours();
    var minutes = Number(slicetime[1]) - thistime.getMinutes();
    
    if(hours<0){
        hours = 24+hours;
    }

    if(minutes<0){
        hours -=1
        minutes = 60 + minutes;
        
    }
    if(im==1){
        hours -= 1;
    }
  
    return `${hours}시간 ${minutes}분 전`;
}
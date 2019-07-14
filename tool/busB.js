import moment from 'moment'
import {AsyncStorage} from 'react-native';

/* 버스 도착시간 계산 알고리즘  */

export default function daycheck(timeTable, route) {
    var a = moment();
    var day = a.day();
    // 0:일요일 ~ 6:토요일 즉,주말일때 운행없음
    if(day === 0 || day === 6) { 
       return "운행없어요.."
    //    return busB(timeTable, route);
    }
    else { 
       return busB(timeTable, route);
    }
}

function busB(timeTable, route ,i){
    var thistime = new Date();
    var add;
    for(i=0; i<timeTable.length; i++){
        var a = timeTable[i];
        slice = a.split(':');
        var time_set_sec = 0;
        timetb_set_sec = Number(slice[0]*60*60)+Number(slice[1]*60)+Number(slice[2])
        this_time_sec = thistime.getHours()*60*60+thistime.getMinutes()*60+thistime.getSeconds()
        hours = parseInt((timetb_set_sec-this_time_sec)/3600)
            if(route < 3){
                minutes = parseInt((timetb_set_sec-this_time_sec)%3600/60)+ route
            }else if(route === 3){
                minutes = parseInt((timetb_set_sec-this_time_sec)%3600/60) + 11
            }else if(route === 4){
                minutes = (parseInt((timetb_set_sec-this_time_sec)%3600/60) + 11) - 1
            }else if(route > 4) {
                minutes = (parseInt((timetb_set_sec-this_time_sec)%3600/60)+ 15) - route  
            }
        
        if(minutes >= 60){
            hours += parseInt(minutes/60);
            minutes = parseInt(minutes%60);
        }
        if(timetb_set_sec > this_time_sec){
            return `${hours}시간 ${minutes}분 전`
        }
    }
    return "운행 종료"
}
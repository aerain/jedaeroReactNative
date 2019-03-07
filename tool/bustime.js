/* 버스 도착시간 계산 알고리즘  */
export default function (timeTable) {
    var thistime = new Date();
    for(i=0; i<timeTable.length; i++){
        var a = timeTable[i];
        slice = a.split(':');
        if(Number(slice[0]) >= thistime.getHours()){
            if(Number(slice[1]) >= thistime.getMinutes()){
                return lefttime(timeTable[i]);
            }
            else if(Number(slice[1])===0){
                return lefttime(timeTable[i]);
            }
        }    
    }
}


function lefttime(params) {
    var slicetime = params.split(':');
    var thistime = new Date(); //현재시간 
    var hours = Number(slicetime[0]) - thistime.getHours();
    var minutes = Number(slicetime[1]) - thistime.getMinutes();
    
    if(hours<0){
        hours = 24+hours;
    }

    if(minutes<0){
        minutes = 60 + minutes;
        
    }
  
    return `${hours}시간 ${minutes}분 전`;
}
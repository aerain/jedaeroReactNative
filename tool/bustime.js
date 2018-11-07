


export default function (timeTable) {
    var thistime = new Date();
    for(i=0; i<timeTable.length; i++){
        var a = timeTable[i];
        slice = a.split(':');
        if(Number(slice[0]) - thistime.getHours>0){
            if(Number(slice[1] - thistime.getMinutes>0)){
                
            }
            else{
                return lefttime(timeTable[i]);
            }
        }
        else{
            return lefttime(timeTable[i]); 
        }
    }
}

function lefttime(params) {
    var slicetime = params.split(':');
    var thistime = new Date(); //현재시간 
    var minutes = Number(slicetime[1]) - thistime.getMinutes();
    
    var hours = Number(slicetime[0]) - thistime.getHours();
    if(minutes<0){
        minutes = 60 + minutes;
        hours = hours-1
    }
    if(hours<0){
        hours = 24+hours;
    }
    return `${hours}시간 ${minutes}분 전`;
}
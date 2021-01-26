import moment from "moment";
export function TimeChecker(time){
    let REFERENCE = moment(); 
    let TODAY = REFERENCE.clone().startOf('day');
    let A_WEEK_OLD = REFERENCE.clone().subtract(7, 'days').startOf('day');
    let result =""
    if(moment(time).isSame(TODAY, 'd')){
        result= time.substr(10);
    }
    else if(moment(time).isAfter(A_WEEK_OLD)){
        result= moment().format('dddd');
    }
    else{
        result= time.substr(0,10)
    }
    return result;
}
export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;


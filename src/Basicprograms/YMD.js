import React from 'react';
function ConvertYMD(props) {
    var inputDays = props.inputDays;

    if(isNaN(inputDays)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var years = parseInt(inputDays / 365);
        var months = parseInt((inputDays - (365 * years)) / 30);
        var days = parseInt((inputDays - (365 * years) - (months * 30)));
    }
    return(
        <h1>{years} Year(s) {months} Month(s) {days} Day(s)</h1>
    )
}
export default ConvertYMD;
import React from 'react';
function SwapWithoutThirdVar(props) {
    var swap_obj = props.swap_obj;
    var num1 = swap_obj[0].num1;
    var num2 = swap_obj[0].num2;
    

    if(isNaN(num1) || isNaN(num2)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }
    return(
        <h1>After swaping Number 1 = {num1} and Number 2 = {num2}</h1>
    );
}
export default SwapWithoutThirdVar;
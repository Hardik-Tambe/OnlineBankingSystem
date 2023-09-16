import React from "react";

function Calculator(props) {
   
    var data = props.data;
    console.log(data);
    var result_arr =[];
    console.log(result_arr);

    data.map((v,i)=>{
        if(v.operator==="+" && !isNaN(v.number1) && !isNaN(v.number2)){
            result_arr.push(<p key={i}>{v.number1} + {v.number2} = {(v.number1+v.number2)}</p>);
        }
        else if(v.operator==="-" && !isNaN(v.number1) && !isNaN(v.number2)){
            result_arr.push(<p key={i}>{v.number1} - {v.number2} = {(v.number1-v.number2)}</p>);
        }
        else if(v.operator==="*" && !isNaN(v.number1) && !isNaN(v.number2)){
            result_arr.push(<p key={i}>{v.number1} * {v.number2} = {(v.number1*v.number2)}</p>);
        }
        else if(v.operator==="/" && !isNaN(v.number1) && !isNaN(v.number2)){
            result_arr.push(<p key={i}>{v.number1} / {v.number2} = {(v.number1/v.number2)}</p>);
        }
        else{
            result_arr.push(<p key={i}>Invalid Operator or Provided number isNaN!</p>)
        }
        return result_arr;
    })
    
    return (
            <h1>Result : {result_arr}</h1>
    );
}

export default Calculator;
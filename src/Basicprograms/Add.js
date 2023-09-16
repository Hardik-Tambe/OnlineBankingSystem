import React from "react";
function Add(props){
    var c = props.num1 + props.num2;
    return(
        <h1>Addition of {props.num1} and {props.num2} is {c}</h1>
    )
}
export default Add;
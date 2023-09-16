import React from "react";

function ChangeValue(){
    var num = 65;
    function afterClick(){
        num = 7;
        console.log(num)
    }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={afterClick}>Click</button>
        </>
    )
}
export default ChangeValue;
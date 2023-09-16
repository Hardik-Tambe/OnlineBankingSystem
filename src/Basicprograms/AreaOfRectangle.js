import React from 'react';
function AreaOfRectangle(props){
    let length = props.length;
    let width = props.width;

    if(isNaN(length) || isNaN(width)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var area = length * width;
    }
    return(
        <h1>Area of Rectangle is : {area}</h1>
    ) 
}
export default AreaOfRectangle;
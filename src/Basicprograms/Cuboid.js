import React from 'react';
function Cuboid(props){
    let length = props.length;
    let width = props.width;
    let height = props.height;

    if(isNaN(length) || isNaN(width) || isNaN(height)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var surfaceArea = 2 * (length + width +  height);
    }
    return(
        <h1>Surface area of Cuboid is : {surfaceArea}</h1>
    ) 
}
export default Cuboid;
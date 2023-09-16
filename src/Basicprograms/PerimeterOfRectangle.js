import React from 'react';
function PerimeterOfRectangle(props){
    let length = props.length;
    let width = props.width;
    
    if(isNaN(length) || isNaN(width)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var perimeter = 2 * (length + width);
    }
    
    return(
        <h1>Perimeter of Rectangle is : {perimeter}</h1>
    ) 
}
export default PerimeterOfRectangle;
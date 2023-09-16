import React from 'react';
function BikeAverage(props){
    var totalDistanceInKm =props.totalDistanceInKm;
    var spentFuel = props.spentFuel;

    if(isNaN(totalDistanceInKm) || isNaN(spentFuel)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var average = spentFuel/totalDistanceInKm ;
    }
    return(
        <h1>Average Consumption : {average} litre/km.</h1>
    )
}
export default BikeAverage;
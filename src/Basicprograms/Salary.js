import React from 'react';
function Salary(props){
    let Emp_ID = props.Emp_ID;
    let workedHours = props.workedHours;
    let rate = props.rate;

    if(isNaN(workedHours) || isNaN(rate)){
        return(
            <h1>Invalid Input!</h1>
        )
    }else{
        var salary = workedHours * rate;
    }

    return(
        <>
            <h1>Employee ID : {Emp_ID}</h1>
            <h1>Employee Salary : {salary} /-</h1>
            </>
    )
}
export default Salary;
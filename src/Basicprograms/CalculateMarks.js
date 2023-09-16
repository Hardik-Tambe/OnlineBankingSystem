import React from 'react';
function CalculateMarks(props){
   let subjectMarks = props.sub;
   let totalMarks = 0;

   for(let i=0;i<subjectMarks.length;i++){
   
    if(isNaN(subjectMarks[i]) || subjectMarks[i]<0 || subjectMarks[i]>100){
        return(
        <h1>Invalid Input!</h1>
        )
    }else{
        totalMarks += subjectMarks[i];
    }
   }
   let average = totalMarks/subjectMarks.length;
   let percentage = parseFloat((totalMarks/(subjectMarks.length*100))*100);

   return(
    <h1>Total Marks : {totalMarks}, Average : {average}, Percentage : {percentage}</h1>
   );
}
export default CalculateMarks;
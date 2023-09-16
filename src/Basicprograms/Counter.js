import React, {useState} from "react";

function Counter(){
    const [steps, setSteps] = useState(1);
    const [count, setCount] = useState(0);
   
    function IncreaseSteps(){
        setSteps((prevstep)=>prevstep+1);
    }
    function DecreaseSteps(){
        setSteps((prevstep)=>prevstep-1);
    }
    function Increment(){
       
        setCount((prevCounter)=>prevCounter+steps)
        
    }
    function Decrement(){
       
        setCount((prevCounter)=>prevCounter-steps);
        
    }
    return(
        <>
            <button onClick={DecreaseSteps}>-</button>
            <span>{steps}</span>
            <button onClick={IncreaseSteps}>+</button>
           
            <br></br>
            <button onClick={Decrement}>-</button>
            <span>Count : {count}</span>
            <button onClick={Increment}>+</button>
            
           
        </>
    )
}

export default Counter; 
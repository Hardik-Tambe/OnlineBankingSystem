import React,{useState} from "react";
import ToggleButton from "./ToggleButon";

function ToggleComp (){
    const [show,SetShow]=useState(null)
    function toggle(){
        SetShow(show?null:true);
    }
    return(
        <>
        <button onClick={() => toggle()}>Click Me</button>
        {show?< ToggleButton/>:null}
        </>
    )
}
export default ToggleComp;
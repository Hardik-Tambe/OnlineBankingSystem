import React from "react";

function DynamicCss(props){
    var bgColor = props.backGroundColor;
    var color = props.color;
    var fs = props.fontSize;
    var fw = props.fontWeight;
    var cssObj = {backgroundColor:bgColor,color:color,fontSize:fs,fontWeight:fw}
    return(
        <h1 style={cssObj}>Thank you for giving me Dynamic Css.</h1>
    );

}
export default DynamicCss;
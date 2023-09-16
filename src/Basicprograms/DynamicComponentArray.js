import React from "react";
function DynamicComponentArray(props){ // props={arr:[11,22,33,44,55,66],name:"minakshee"}
    var arr = props.arrr
     var lis = [];
     function list(){
        for(var i=0;i<arr.length;i++){
            lis.push(<li>{arr[i]}</li>)
        }
        return lis;
    }
    return(
        // <h1>{JSON.stringify(props)}</h1>
        <div>
            <h1>Hello Application</h1>
             
            <ul type="disc">
                {/* {arr.map(function(v,i){
                    return(
                        <li>{arr[i]}</li>
                    );
                })} */}
                 {/* {lis}  */}
                 {list()}
            </ul>
            
        </div>
    );
}
export default DynamicComponentArray;
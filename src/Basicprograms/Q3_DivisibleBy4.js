import React from "react";

function DivisibleBy4(props) {
    var array = props.array;

    return (
        <div>
            <p>{array.join(", ")}</p>
            <h2>Result:</h2>
            {array.map((v, i) => {
                if (v % 4 === 0) {
                    var res = v / 4;
                    return (
                        <p key={i}>Index {i}, Divisible By 4 = {res}</p>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default DivisibleBy4;
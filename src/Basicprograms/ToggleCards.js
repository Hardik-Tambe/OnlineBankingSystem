import React, { useState } from "react";
import './Cards.css';

function ToggleCards(props) {
    const [selectedId, setSelectedId] = useState(null);
    var dataArr = props.dataArr;
    
    function onClick(event) {
        var id = parseInt(event.target.id);
        setSelectedId(id === selectedId ? null : id);
    }
    return (
        <div className="parent">
            {dataArr.map((v, i) => {
                const isClicked = (v.id === selectedId);
                return (
                    <div className={`cards ${isClicked ? "bgRed" : ""}`} id={v.id} key={i} onClick={onClick}>
                        {isClicked ? v.answer : v.question}
                    </div>
                )
            })}
        </div>
    )
}
export default ToggleCards;
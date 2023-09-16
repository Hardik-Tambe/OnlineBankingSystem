import React from "react";

function Table(props) {
  var tableValue = props.tableValue;
  console.log(tableValue);
  var table;
  var result = [];

  // Calculate the multiplication table and populate the 'result' array
  for (let i = 1; i <= 10; i++) {
    table = i * tableValue;
    result.push(
      <p key={i}>
        {tableValue} x {i} = {table}
      </p>
    );
  }

  return (<div>{result}</div>);
}

export default Table;

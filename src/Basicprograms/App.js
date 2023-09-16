import React from 'react';
import Add from './Add.js';
import CalculateMarks from './CalculateMarks.js';
import PerimeterOfRectangle from './PerimeterOfRectangle.js';
import AreaOfRectangle from './AreaOfRectangle.js';
import Cuboid from './Cuboid.js';
import Salary from './Salary.js';
import BikeAverage from './BikeAverage.js';
import ConvertYMD from './YMD.js';
import Seconds from './Seconds.js';
import SwapThirdVar from './SwapThirdVar.js';
import SwapWithoutThirdVar from './SwapWithoutThirdVar.js';
import DynamicComponentArray from './DynamicComponentArray.js';
import DynamicCss from './Q1_DynamicCss.js';
import Calculator from './Q2_Calculator.js';
import DivisibleBy4 from './Q3_DivisibleBy4.js';
import Table from './Q4_Table.js';
import Voting from './Q5_Voting.js';
import VisitingCard from './Q6_VisitingCard.js';
import ChangeValue from './ChangeValue.js';
import Counter from './Counter.js';
import ToggleCards from './ToggleCards.js';
import ToggleComp from './ToggleComp.js';


var selectFile = parseInt(prompt("Select whilch file you want to execute: \n 1.Basic Js program. \n 2.Dynamic Css Assignment. \n 3.Toggle Cards \n 4.ToggleComp"))

var arrr = [11, 22, 33, 44, 55, 66];

var subjectMarks = [50, 60, 70, 65, 75];

var voting_arr = [
  {
    name: "Carlos", age: 15, country: "Brazil"
  },
  {
    name: "Joyo", age: 19, country: "Indonesia"
  },
  {
    name: "Rahul", age: 17, country: "India"
  },
  {
    name: "Kim", age: 20, country: "South Korea"
  },
  {
    name: "Ayaan", age: 30, country: "Pakistan"
  },
  {
    name: "Krishna", age: 18, country: "India"
  },
  {
    name: "Delima", age: 22, country: "Malaysia"
  },
  {
    name: "Thapa", age: 25, country: "Nepal"
  },
  {
    name: "Habibi", age: 18, country: "UAE"
  },
  {
    name: "Adriano", age: 18, country: "Brazil"
  },
]

const questions = [
  {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
  },
  {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
  },
  {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
  },
  {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
  },
  {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
  },
  {
      id: 2002,
      question:
          "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
  }
];

function App() {
  
  return (
    <>
      {function () {
        if (selectFile === 1) {
          var input = parseInt(prompt("Enter Component Number : \n 1.DynamicComponentArray \n 2.Addition \n 3.CalculateMarks \n 4.PerimeterOfRectangle \n 5.AreaOfRectangle \n 6.Cuboid \n 7.Emp_Salary \n 8.BikeAverage \n 9.ConvertYMD \n 10.Seconds \n 11.SwapThirdVar \n 12.SwapWithoutThirdVar \n 13.DynamicComponentArray"));

          if (input === 1) {
            return (<DynamicComponentArray arrr={arrr} />);
          }
          else if (input === 2) {
            let a = parseInt(prompt("Enter number 1:"));
            let b = parseInt(prompt("Enter number 2:"));
            return (<Add num1={a} num2={b} />);
          }
          else if (input === 3) {
            return (<CalculateMarks sub={subjectMarks} />);
          }
          else if (input === 4) {
            let length = parseFloat(prompt("Enter the Length :"));
            let width = parseFloat(prompt("Enter the Width :"));
            let obj = {
              length: length,
              width: width,
            };
            return (<PerimeterOfRectangle length={obj.length} width={obj.width} />);
          }
          else if (input === 5) {
            let length = parseFloat(prompt("Enter the Length :"));
            let width = parseFloat(prompt("Enter the Width :"));
            let obj = {
              length: length,
              width: width,
            };
            return (<AreaOfRectangle length={obj.length} width={obj.width} />);
          }
          else if (input === 6) {
            let length = parseFloat(prompt("Enter the Length :"));
            let width = parseFloat(prompt("Enter the Width :"));
            let height = parseFloat(prompt("Enter the Height :"));

            let obj = {
              length: length,
              width: width,
              height: height,
            };
            return (<Cuboid length={obj.length} width={obj.width} height={obj.height} />);
          }
          else if (input === 7) {
            var Emp_ID = prompt("Enter your ID :");
            var workedHours = parseInt(prompt("Enter total worked hours :"));
            var rate = parseInt(prompt("Enter rate per hour :"));
            let Emp_obj = {
              Emp_ID: Emp_ID,
              workedHours: workedHours,
              rate: rate,
            };
            return (<Salary Emp_ID={Emp_obj.Emp_ID} workedHours={Emp_obj.workedHours} rate={Emp_obj.rate} />);
          }
          else if (input === 8) {
            var totalDistanceInKm = parseFloat(prompt("Enter total distance travelled(in km) :"));
            var spentFuel = parseFloat(prompt("Enter total fuel spent(in litre) :"));

            let bikeAverage_obj = {
              totalDistanceInKm: totalDistanceInKm,
              spentFuel: spentFuel,
            };
            return (<BikeAverage totalDistanceInKm={bikeAverage_obj.totalDistanceInKm} spentFuel={bikeAverage_obj.spentFuel} />);
          }
          else if (input === 9) {
            let inputDays = parseInt(prompt("Enter number (in days)"));
            return (<ConvertYMD inputDays={inputDays} />);
          }
          else if (input === 10) {
            let inputSeconds = parseInt(prompt("Enter number (in seconds)"));
            return (<Seconds inputSeconds={inputSeconds} />);
          }
          else if (input === 11) {
            let num1 = parseInt(prompt("Enter Number 1: "));
            let num2 = parseInt(prompt("Enter Number 2: "));
            let swap_obj = {
              num1: num1,
              num2: num2,
            }
            return (<SwapThirdVar swap_obj={swap_obj} />);
          }
          else if (input === 12) {
            let num1 = parseInt(prompt("Enter Number 1: "));
            let num2 = parseInt(prompt("Enter Number 2: "));
            let swap_obj = {
              num1: num1,
              num2: num2,
            }
            return (<SwapWithoutThirdVar swap_obj={swap_obj} />);
          }
          else {
            return (
              <h1>Invalid Input</h1>
            )
          }
        }
        else if (selectFile === 2) {
          var inputUser = parseInt(prompt("Enter Component Number : \n 1. Q1 DynamicCss  \n 2. Q2 Calculator \n 3. Q3 Divisible by 4 \n 4. Q4 Table  \n 5. Q5 Voting Eligibility \n 6. Q6 External Css \n 7. ChangeValue \n 8.Counter "));
          if (inputUser === 1) {
            var backGroundColor = prompt("Enter background-color you want to apply :");
            var color = prompt("Enter color you want to apply :");
            var fontSize = prompt("Enter font-size you want to apply (in px) :");
            var fontWeight = prompt("Enter font-weight you want to apply :");
            return (<DynamicCss backGroundColor={backGroundColor} color={color} fontSize={fontSize} fontWeight={fontWeight} />);
          }
          else if (inputUser === 2) {
            var exit;
            var data = [];
            while (exit !== "bye") {

              var number1 = parseFloat(prompt("Enter Number 1 :"));
              var operator = prompt("Enter  Operation symbol you want to perform  ( + , - , * , / ) ");
              var number2 = parseFloat(prompt("Enter Number 2 :"));
              exit = prompt("Enter 'bye' to get result else type anything to perform other operations :")

              data.push({ operator, number1, number2 });

              if (exit === "bye") {
                break;
              }
            }
            return (<Calculator data={data} />);
          }
          else if (inputUser === 3) {
            var array = [];
            var count = parseInt(prompt("Enter how many times you want to provide numbers"));
            var totalNum;
            for (var i = 0; i < count; i++) {
              totalNum = parseInt(prompt("Enter a number"));
              array.push(totalNum);
            }
            return (<DivisibleBy4 array={array} />);
          }
          else if (inputUser === 4) {
            while (true) {
              var tableValue = parseInt(prompt("Enter a number to get the table of it:"));
          
              if (!isNaN(tableValue) && tableValue > 0) {
                return <Table tableValue={tableValue} />;
              } else {
                alert("Invalid input! Please enter a number greater than 0.");
              }
            }
          }
          else if (inputUser === 5) {
            return (<Voting voting_arr={voting_arr} />)
          }
          else if (inputUser === 6) {
            return (<VisitingCard />)
          }
          else if(inputUser === 7){
            return(<ChangeValue/>)
          }
          else if(inputUser===8){
            return(<Counter />)
          }
          else {
            return (
              <h1>Invalid Input</h1>
            )
          }
        }
        else if(selectFile===3){
          return(<ToggleCards dataArr={questions}/>)
        }
        else if(selectFile===4){
          return(<ToggleComp/>)
        }
      }()}
    </>
  );
}

export default App;



























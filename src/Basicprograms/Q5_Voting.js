import React from "react";

function Voting(props) {
    var voting_arr = props.voting_arr;
    var mb = "30px";
    var fs = "20px";
    var textALign = "center";
    var fw = "bold";
    var minWidth = "120px";
    var padding = "7px";
    var red = "red";
    var green = "green";
    return (
        <>
            <table border="1" cellSpacing="0" style={{ marginBottom: mb,fontSize: fs }}>
                <caption style={{fontWeight:fw}}>Eligibility Crieteria</caption>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: fs,textAlign:textALign }}>
                    <tr>
                        <td>Minimum 16</td>
                        <td>Brazil</td>
                    </tr>
                    <tr>
                        <td>Minimum 17</td>
                        <td>Indonesia</td>
                    </tr>
                    <tr>
                        <td>Minimum 18</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>Minimum 19</td>
                        <td>South Korea</td>
                    </tr>
                    <tr>
                        <td>Minimum 21</td>
                        <td>Malaysia</td>
                    </tr>
                    <tr>
                        <td>Minimum 25</td>
                        <td>UAE</td>
                    </tr>

                </tbody>
            </table>

            <table border="1" cellSpacing={0} style={{fontSize: fs }}>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th style={{minWidth:minWidth}}>Name</th>
                        <th style={{minWidth:minWidth}}>Age</th>
                        <th style={{minWidth:minWidth}}>Country</th>
                        <th>Eligibility</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: fs,textAlign:textALign }}>
                    
                    {voting_arr.map(function (v, i) {
                        let eligibility = "You're not Eligible for voting";

                        if (
                            (v.age >= 16 && v.country === "Brazil") ||
                            (v.age >= 17 && v.country === "Indonesia") ||
                            (v.age >= 18 && v.country === "India") ||
                            (v.age >= 19 && v.country === "South Korea") ||
                            (v.age >= 21 && v.country === "Malaysia") ||
                            (v.age >= 25 && v.country === "UAE")
                        ) {
                            eligibility = <b style={{color:green}}> You're Eligible for voting. </b>;
                        }
                        return (
                            <tr key={i}>
                                <td>{i+1}.</td>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td>{v.country}</td>
                                <td style={{padding:padding,color:red}}>{eligibility}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
export default Voting;
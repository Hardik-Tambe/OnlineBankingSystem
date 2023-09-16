import React from 'react';
function Seconds(props) {
    var inputSeconds = props.inputSeconds;

    if (isNaN(inputSeconds)) {
        return (
            <h1>Invalid Input!</h1>
        )
    } else {
        var hours = parseInt(inputSeconds / 3600);
        var minutes = parseInt((inputSeconds - (3600 * hours)) / 60);
        var seconds = parseFloat((inputSeconds - (3600 * hours) - (minutes * 60)));
    }
    return (
        <h1>{hours} Hour(s) {minutes} Minute(s) {seconds} Seconds(s)</h1>
    )
}
export default Seconds;
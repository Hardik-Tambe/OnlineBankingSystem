import React, { useState, useContext } from 'react';
import loginDataContext from '../context/loginData/LoginDataContext';
import Swal from 'sweetalert2';

function Login({ state, dispatch }) {
    const { loginState } = useContext(loginDataContext);
    const { loggedInUser } = useContext(loginDataContext);
    const [accountNumber, setAccountNumber] = useState('');
    const [pin, setPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {

        const user = state.find(user => user.acc_no === accountNumber && user.pin === pin);
        if (accountNumber === "" || pin === "") {
            setErrorMessage("Please fill all the fields..")
        } else if (user) {
            loginState(accountNumber, pin);
            dispatch({
                type: "LOGIN",
                payload: { acc_num: accountNumber, pin: pin },
            })
            setAccountNumber('');
            setPin('');
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Logged-In Successfully',
                showConfirmButton: false,
                timer: 2000
            })
            console.log('Logged in successfully');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Account not found / Invalid Account or PIN Number!',
            })
            setErrorMessage('Account not found.');
            return;
        }
    };

    {
        if (!loggedInUser.loggedIn) {
            return (
                <div className="container d-flex justify-content-center align-items-center bankImg">
                    <div className="text-center bg-info text-dark p-5 rounded-2">
                        <h2 className='pb-5 text-dark'>Log-In</h2>
                        <label className='fs-5 fw-medium me-2'>Account Number : </label>
                        <input
                            type="text"
                            placeholder="Account Number"
                            value={accountNumber}
                            onChange={e => setAccountNumber(e.target.value)}
                        /><br /><br />
                        <label className='fs-5 fw-medium me-4'>Enter PIN Number :   </label>
                        <input
                            type="password"
                            placeholder="PIN"
                            value={pin}
                            onChange={e => setPin(e.target.value)}
                        /><br /><br />
                        <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
                        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container d-flex justify-content-center align-items-center bankImg"></div>
            )
        }
    }
}
export default Login;

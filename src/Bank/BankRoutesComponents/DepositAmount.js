import React, { useContext, useState } from 'react';
import loginDataContext from "../context/loginData/LoginDataContext";
import Swal from 'sweetalert2';

function DepositeAmount({ dispatch }) {
  const {loggedInUser} = useContext(loginDataContext);
  const [depAmount, setDepAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepositAmount = () => {

    setErrorMessage('');

    if (!depAmount) {
      setErrorMessage('Please enter some amount..!');
    } else {
      const depositAmount = parseFloat(depAmount);

      if (isNaN(depositAmount) || depositAmount <= 0) {
        setErrorMessage('Please enter a valid deposit amount.');
        return;
      }

      dispatch({
        type: 'DEPOSIT',
        payload: {
          accountNumber: loggedInUser.accNum, 
          depositAmount: depositAmount,
        },
      });

      setDepAmount('');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Amount deposited successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2">
        <h2 className='pb-5 text-dark'>Deposit Amount</h2>
        <form>

          <label className='fs-5 fw-medium'>Enter Amount to Deposit : </label>
          <input
            type="text"
            className='rounded-2 my-input p-1 mx-1'
            name="depAmount"
            id="depAmount"
            placeholder='Enter amount...'
            value={depAmount}
            onChange={(e) => setDepAmount(e.target.value)}
          /><br /><br />
        </form>

        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}

        <button className="btn btn-primary mt-3" onClick={handleDepositAmount}>
          Deposit
        </button>
      </div>
    </div>
  );
}

export default DepositeAmount;

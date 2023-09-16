import React, { useState,useContext } from 'react';
import loginDataContext from "../context/loginData/LoginDataContext";
import Swal from 'sweetalert2';

function WithdrawAmount({ state, dispatch }) {
  const {loggedInUser} = useContext(loginDataContext);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleWithdrawAmount = () => {
  
    setErrorMessage('');

    if (!withdrawAmount) {
      setErrorMessage('Please enter amount..!')
    } else {
      // Find the user acc by acc number
      const userAccount = state.find(account => account.acc_no === loggedInUser.accNum);    

      const withdrawAmt = parseFloat(withdrawAmount);

      if (isNaN(withdrawAmt) || withdrawAmt <= 0) {
        setErrorMessage('Please enter a valid withdraw amount.');
        return;
      }
      if (withdrawAmount > userAccount.balance) {
        setErrorMessage('Insufficient balance')
      } else {
        dispatch({
          type: 'WITHDRAW',
          payload: {
            withdrawAccountNumber: loggedInUser.accNum,  
            withdrawAmount: withdrawAmt,  
          },
        });

        setWithdrawAmount('');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Amount withdrawn successfully!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2">
        <h2 className='pb-5 text-dark'>Withdraw Amount</h2>
        <form>

          <label className='fs-5 fw-medium'>Enter Amount to withdraw : </label>
          <input
            type="text"
            className='rounded-2 my-input p-1 mx-1'
            name="depAmount"
            id="depAmount"
            placeholder='Enter amount...'
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          /><br /><br />
        </form>

        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}

        <button className="btn btn-primary mt-3" onClick={handleWithdrawAmount}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default WithdrawAmount;

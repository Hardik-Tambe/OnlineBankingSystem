import React, { useState,useContext } from 'react';
import Swal from 'sweetalert2';
import loginDataContext from "../context/loginData/LoginDataContext";

function RequestLoan({ state, dispatch }) {
  const {loggedInUser} = useContext(loginDataContext);
  const [loanAmount, setLoanAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleLoanRequest = () => {
    
    setErrorMessage('');
    if (!loanAmount) {
      setErrorMessage('Please enter amount..!')
    } else {
      // Find the user acc by acc number
      const userAccount = state.find(account => account.acc_no === loggedInUser.accNum);

      const reqLoanAmount = parseFloat(loanAmount);

      if (isNaN(reqLoanAmount) || reqLoanAmount <= 0) {
        setErrorMessage('Please enter a valid amount.');
        return;
      }
      if (userAccount.loan !== 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You already have an ongoing loan. You cannot take a new loan. If you want a new loan, first clear the existing loan..!',
        });
        setLoanAmount('');
      } else {
        dispatch({
          type: 'REQUEST_LOAN',
          payload: {
            loanAccountNumber: loggedInUser.accNum,  
            reqLoanAmount: reqLoanAmount,  
          },
        });

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Loan Approved!',
          showConfirmButton: false,
          timer: 2000,
        });
        setLoanAmount('');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2">
        <h2 className='pb-5 text-dark'> Request Loan</h2>
        <form>
          <label className='fs-5 fw-medium'>Enter Loan Amount : </label>
          <input
            type="text"
            className='rounded-2 my-input p-1 mx-1'
            name="loanAmount"
            id="loanAmount"
            placeholder='Enter amount...'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          /><br /><br />
        </form>

        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}

        <button className="btn btn-primary mt-3" onClick={handleLoanRequest}>
          Request Loan
        </button>
      </div>
    </div>
  );
}

export default RequestLoan;

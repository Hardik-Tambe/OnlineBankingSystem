import React, { useState,useContext } from 'react';
import Swal from 'sweetalert2';
import loginDataContext from "../context/loginData/LoginDataContext";


function PayLoan({ state, dispatch }) {
  const {loggedInUser} = useContext(loginDataContext);
  const [payLoanAmount, setPayLoanAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoanPay = () => {
    
    setErrorMessage('');
    if (!payLoanAmount) {
      setErrorMessage('Please enter amount..!')
    } else {
      // Find the user acc by acc number
      const userAccount = state.find(account => account.acc_no === loggedInUser.accNum);

      const payLoanAmt = parseFloat(payLoanAmount);

      if (isNaN(payLoanAmt) || payLoanAmt <= 0) {
        setErrorMessage('Please enter a valid amount.');
        return;
      }
      if (userAccount.loan === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There is no ongoing loan or you had already paid the loan..!',
        });
        setPayLoanAmount('');
      } else {

        if ((userAccount.loan - payLoanAmt === 0) && (userAccount.balance >= payLoanAmt)) {
          dispatch({
            type: 'PAY_LOAN',
            payload: {
              payLoanAccNumber: loggedInUser.accNum,  
              payLoanAmount: payLoanAmt,  
            },
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "The loan has been successfully closed and all outstanding amounts have been settled.",
            showConfirmButton: false,
            timer: 3000,
          });
        } else if (userAccount.loan - payLoanAmt < 0 && userAccount.balance>=payLoanAmt) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are paying extra amount please check your loan status and pay accordingly..!',
          });
        }else if ( userAccount.balance < payLoanAmt ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You dont have sufficient balance to pay loan, please deposit money then try to pay the loan!',
          });
        } else {
          dispatch({
            type: 'PAY_LOAN',
            payload: {
              payLoanAccNumber: loggedInUser.accNum,  
              payLoanAmount: payLoanAmt,  
            },
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: payLoanAmt + ' reduced from your loan amount..!',
            showConfirmButton: false,
            timer: 3000,
          });
        }
        setPayLoanAmount('');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2">
        <h2 className='pb-5 text-dark'> Pay Loan</h2>
        <form>
          <label className='fs-5 fw-medium'>Enter Amount to pay Loan : </label>
          <input
            type="text"
            className='rounded-2 my-input p-1 mx-1'
            name="loanAmount"
            id="loanAmount"
            placeholder='Enter amount...'
            value={payLoanAmount}
            onChange={(e) => setPayLoanAmount(e.target.value)}
          /><br /><br />
        </form>

        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}

        <button className="btn btn-primary mt-3" onClick={handleLoanPay}>
          Pay Loan
        </button>
      </div>
    </div>
  );
}

export default PayLoan;

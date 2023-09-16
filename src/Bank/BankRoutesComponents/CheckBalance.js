import React, { useState, useContext, useEffect } from 'react';

import loginDataContext from "../context/loginData/LoginDataContext";

function CheckBalance({ state, dispatch }) {
  const { loggedInUser } = useContext(loginDataContext);
  const [accountInfo, setAccountInfo] = useState(null);

  const checkBal = () => {

    // Find the user acc by acc number
    const userAccount = state.find(account => account.acc_no === loggedInUser.accNum);

    dispatch({
      type: 'CHECK_BALANCE',
      payload: {
        checkAccountNumber: loggedInUser.accNum,
      },
    });
    setAccountInfo({
      userBalance: userAccount.balance,
      userLoan: userAccount.loan,
    });
  };

  useEffect(() => {
    checkBal();
  }, [])

  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2">
        {accountInfo && (
          <div>
            <h2>Balance : {accountInfo.userBalance}</h2>
            <h2 >Loan Status : <span className={accountInfo.userLoan === 0 ? "bg-success" : "bg-danger"}>{accountInfo.userLoan === 0 ? "Not Active" : "Active"}</span></h2>
            <h2>{accountInfo.userLoan === 0 ? "" : "Loan Amount : " + accountInfo.userLoan}</h2>

          </div>
        )}
      </div>
    </div>
  );
}

export default CheckBalance;

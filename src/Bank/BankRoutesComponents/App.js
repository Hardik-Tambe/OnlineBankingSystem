import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './bank.css';

import Navbar from "./Navbar.js"
import WithdarwAmount from "./WithdrawAmount.js"
import DepositeAmount from "./DepositAmount.js";
import NotFound from "./NotFound.js";
import CreateAccount from "./CreateAccount.js";
import PayLoan from "./PayLoan.js";
import RequestLoan from "./RequestLoan.js";
import CloseAccount from "./CloseAccount.js";
import CheckBalance from "./CheckBalance.js";
import LoginDataState from '../context/loginData/LoginDataState';
import Login from './Login';
import Logout from "./Logout";

const reducer = (state, action) => {
  // console.log('Current state:', state);
  // console.log('Action type:', action.type);
  // console.log('Action payload:', action.payload);
  switch (action.type) {

    case 'OPEN_ACCOUNT':
      const newState = [...state, action.payload]; // add new acc to state
      console.log('Updated new user accounts array:', newState);
      return newState;

    case 'LOGIN':
      const { acc_num, pin } = action.payload;
      var loggedInUser = state.map(account => {
        if (account.acc_no === acc_num && account.pin === pin) {
          return account
        }
        return loggedInUser;
      })
      console.log(loggedInUser);
    case 'DEPOSIT':
      const { accountNumber, depositAmount } = action.payload;

      const depositAcc = state.map(account => {
        if (account.acc_no === accountNumber) {
          return {
            ...account,
            balance: account.balance + depositAmount,
          };
        }
        return account;
      });

      console.log('Updated deposited accounts array:', depositAcc);
      return depositAcc;

    case 'WITHDRAW':
      const { withdrawAccountNumber, withdrawAmount } = action.payload;

      const withdrawUpdatedAccounts = state.map(account => {
        if (account.acc_no === withdrawAccountNumber) {
          return {
            ...account,
            balance: account.balance - withdrawAmount,
          };
        }
        return account;
      });

      console.log('Updated withdrawn accounts array:', withdrawUpdatedAccounts);
      return withdrawUpdatedAccounts;

    case 'REQUEST_LOAN':
      const { loanAccountNumber, reqLoanAmount } = action.payload;

      const loanUpdatedAccounts = state.map(account => {
        if (account.acc_no === loanAccountNumber) {
          return {
            ...account,
            balance: account.balance + reqLoanAmount,
            loan: account.loan + reqLoanAmount,
          };
        }
        return account;
      });

      console.log('Updated requested loan accounts array:', loanUpdatedAccounts);
      return loanUpdatedAccounts;

    case 'PAY_LOAN':
      const { payLoanAccNumber, payLoanAmount } = action.payload;

      const payLoanUpdatedAccounts = state.map(account => {
        if (account.acc_no === payLoanAccNumber) {
          return {
            ...account,
            balance: account.balance - payLoanAmount,
            loan: account.loan - payLoanAmount,
          };
        }
        return account;
      });
      console.log('Updated pay loan accounts array:', payLoanUpdatedAccounts);
      return payLoanUpdatedAccounts;

    case 'CHECK_BALANCE':
      const { checkAccountNumber } = action.payload;

      const checkAccounts = state.map(account => {
        if (account.acc_no === checkAccountNumber) {
          return {
            ...account,
            balance: account.balance,
            loan: account.loan,
          };
        }
        return account;
      });
      console.log('Updated check balance accounts array:', checkAccounts);
      return checkAccounts;

    case 'CLOSE_ACCOUNT':

      const { deleteAccountNumber } = action.payload;

      const updatedAccounts = state.filter(account => {
        return (account.acc_no !== deleteAccountNumber)
      });
      console.log('Updated close accounts array:', updatedAccounts);
      return updatedAccounts;
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <LoginDataState state={state} dispatch={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<CreateAccount state={state} dispatch={dispatch} />}></Route>
              <Route path="/Login" element={<Login state={state} dispatch={dispatch} />} ></Route>
              <Route path="/Logout" element={<Logout />} ></Route>
              <Route path="DepositAmount" element={<DepositeAmount state={state} dispatch={dispatch} />}></Route>
              <Route path="WithdrawAmount" element={<WithdarwAmount state={state} dispatch={dispatch} />}></Route>
              <Route path="RequestLoan" element={<RequestLoan state={state} dispatch={dispatch} />}></Route>
              <Route path="PayLoan" element={<PayLoan state={state} dispatch={dispatch} />}></Route>
              <Route path="CheckBalance" element={<CheckBalance state={state} dispatch={dispatch} />}></Route>
              <Route path="CloseAccount" element={<CloseAccount state={state} dispatch={dispatch} />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginDataState>
    </>
  );
}

export default App;

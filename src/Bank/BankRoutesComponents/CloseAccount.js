import React, { useContext, useEffect } from 'react';
import loginDataContext from "../context/loginData/LoginDataContext";
import Swal from 'sweetalert2';

function CloseAccount({ state, dispatch }) {
  const { loggedInUser } = useContext(loginDataContext);
  const { logout } = useContext(loginDataContext);

  const handleCloseAccount = () => {

    // Find the user acc by acc number
    const userAccount = state.find(account => account.acc_no === loggedInUser.accNum);

    if (userAccount.loan !== 0 || userAccount.balance !== 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' You cannot close your account until you withdraw all of your Money from account / Close your loan by paying all the remaining amount.',
      })

    }
    else {
      dispatch({
        type: 'CLOSE_ACCOUNT',
        payload: {
          deleteAccountNumber: loggedInUser.accNum,  
        },
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your account has been closed !',
        showConfirmButton: false,
        timer: 3000,
      });
      logout();
    }
  };

  useEffect(()=>{
    handleCloseAccount();
  },[])

  // if (loggedInUser.loggedIn) {
    return (
      <div className="container d-flex justify-content-center align-items-center bankImg">
        {/* <div className="text-center bg-info text-dark p-5 rounded-2">
          <h2 className='pb-5 text-dark'>Click on below button</h2>

          <button className="btn btn-primary mt-3" onClick={handleCloseAccount}>
            Close Account
          </button>
        </div> */}
      </div>
    );
//   } else {
//     return (
//       <div className="container d-flex justify-content-center align-items-center bankImg"></div>
//     )
//   }
 }

export default CloseAccount;

import React, { useState, useEffect} from 'react';
// import loginDataContext from "../context/loginData/LoginDataContext";
import Swal from 'sweetalert2';

function CreateAccount({ state, dispatch }) {
  // const loginData = useContext(loginDataContext)
  // console.log(loginData.addUser)

  const [havePan, setHavePan] = useState(true);
  const [name, setName] = useState('');
  const [panNo, setPanNo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);

  const generateRandomNumber = (digits) => {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (accountInfo) {
      const timer = setTimeout(() => {
        setAccountInfo(null);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [accountInfo]);

  const handleHavePanChange = (event) => {
    const selectedValue = event.target.value;
    setHavePan(selectedValue === 'yes');
    setPanNo('');
    if (selectedValue === 'no') {
      setErrorMessage('You cannot create an account without a PAN card.');
    } else {
      setErrorMessage('');
    }
  };

  const handleCreateAccount = () => {
    if (!name) {
      setErrorMessage('Please enter your name.')
    } else {
      if (havePan) {
        if (!panNo) {
          setErrorMessage('Please enter PAN number.');
          return;
        }

        const newAccount = {
          name: name,
          pan_no: panNo,
          acc_no: generateRandomNumber(12).toString(), 
          pin: generateRandomNumber(4).toString(),     
          balance: 0,
          loan: 0,
          isActive: true,
        };

        dispatch({
          type: 'OPEN_ACCOUNT',
          payload: newAccount,
        });
        console.log('Updated state after opening account:', state);

        setAccountInfo({
          acc_no: newAccount.acc_no,
          pin: newAccount.pin,
        });

        setName('');
        setPanNo('');
        // setHavePan(false);
        setErrorMessage('');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Account Created Successfully',
          showConfirmButton: false,
          timer: 2000
        })
      } else if (!havePan) {
        setErrorMessage('You cannot create an account without a PAN card.');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center bankImg">
      <div className="text-center bg-info text-dark p-5 rounded-2" >
        <h1 className='pb-5 text-dark'>Create Account</h1>
        <form>
          <label className='fs-5 fw-medium'>Account Holder Name : </label>
          <input
            type="text"
            className='rounded-2 my-input p-1 mx-1'
            name="create_acc_name"
            id="create_acc_name"
            value={name}
            placeholder='Enter name...'
            onChange={(e) => setName(e.target.value)}
          /><br /><br />
          <label className='fs-5 fw-medium'>Do you have a PAN CARD?</label><br /><br />
          <label className='fs-5 fw-medium'>
            YES
            <input
              type="radio"
              name="havePan"
              value="yes"
              checked={havePan}
              onChange={handleHavePanChange}
            />
          </label>
          <label className='fs-5 fw-medium'>
            NO
            <input
              type="radio"
              name="havePan"
              value="no"
              checked={!havePan}
              onChange={handleHavePanChange}
            />
          </label> <br /><br />
          {havePan && (
            <div>
              <label className='fs-5 fw-medium'>Enter PAN Number : </label>
              <input
                type="text"
                className='rounded-2 my-input p-1 mx-1'
                name="create_acc_pan"
                id="create_acc_pan"
                value={panNo}
                placeholder='Enter pan no...'
                onChange={(e) => setPanNo(e.target.value)}
              /><br /><br />
            </div>
          )}
        </form>
        {errorMessage && <p className="text-danger fw-bold fs-5">{errorMessage}</p>}
        {accountInfo && (
          <div>
            <h2 className='bg-primary text-dark'>Account created successfully</h2>
            <h3>Account Number : {accountInfo.acc_no.toString()}</h3>
            <h3>PIN : {accountInfo.pin.toString()}</h3>
            <p className='text-danger'>Please copy the Account no. and remember the pin then login.</p>
          </div>
        )}
        <button className="btn btn-primary" onClick={handleCreateAccount}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;

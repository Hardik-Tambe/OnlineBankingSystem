import React, { useState } from 'react';
import LoginDataContext from './LoginDataContext';


function LoginDataState({ children, state, dispatch }) {

    const [loggedInUser, setLoggedInUser] = useState({
        loggedIn: false,
        accNum: '',
        pin: '',
    });

    const loginState = (accNum, pin) => {

        const account = state.find((account) => account.acc_no === accNum && account.pin === pin);
        if (account) {
            setLoggedInUser({ loggedIn: true, accNum, pin });
        }
    }
     console.log(loggedInUser);

    const logout = () => {
        setLoggedInUser({ loggedIn: false, accNum: '', pin: '' });
    };

    return (
        <LoginDataContext.Provider value={{ loginState, loggedInUser, logout }}>
            {children}
        </LoginDataContext.Provider>
    )
}

export default LoginDataState
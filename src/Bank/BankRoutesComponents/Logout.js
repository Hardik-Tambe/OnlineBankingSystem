import React,{useContext,useEffect} from 'react'
import loginDataContext from '../context/loginData/LoginDataContext';

function Logout() {
    const { logout } = useContext(loginDataContext);
    useEffect(()=>{
        logout();
    },[])
    
  return (
    <div className="container d-flex justify-content-center align-items-center bankImg"></div>
  )
}

export default Logout
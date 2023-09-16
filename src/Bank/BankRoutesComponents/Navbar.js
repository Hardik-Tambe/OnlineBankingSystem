import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import loginDataContext from "../context/loginData/LoginDataContext";

const Navbar = () => {
    const { loggedInUser } = useContext(loginDataContext);
    console.log(loggedInUser);
    return (
        <>
            <nav className="bg-dark border-bottom border-body p-3" data-bs-theme="dark">
                <ul type="none" className="nav nav-pills nav-fill">
                    {!loggedInUser.loggedIn ?
                        <>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/"><button className="btn active fs-5">Create Account</button></Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link" to="/Login"><button className="btn active fs-5">Login</button></Link>
                            </li>
                        </>
                        : ""
                    }
                    {loggedInUser.loggedIn ?
                        <>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Logout"><button className="btn active fs-5">Logout</button></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/DepositAmount"><button className="btn active fs-5">Deposit</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/WithdrawAmount"><button className="btn active fs-5">Withdraw</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/RequestLoan"><button className="btn active fs-5">Request for Loan</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/PayLoan"><button className="btn active fs-5">Pay Loan</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CheckBalance"><button className="btn active fs-5">Check Balance</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CloseAccount"><button className="btn active fs-5">Close Account</button></Link>
                            </li>
                        </>
                        : ""
                    }
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Navbar;

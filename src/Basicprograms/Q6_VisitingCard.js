import React from "react";
import "./VisitingCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faEarthAsia, faPhone } from '@fortawesome/free-solid-svg-icons'

function visitingCard() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="line"></div>
                    <div className="leftBox">
                        <div className="logo">
                            <div className="inner"></div>
                        </div>
                        <h1><span className="fw">CREATIVE</span> MEDIA</h1>
                        <p className="tagline">YOUR COMPANY TAGLINE HERE</p>
                    </div>
                    <div className="rightBox">
                        <h1><span className="fw">MARK</span> HENRY SMITH </h1>
                        <p className="mb-5">CO-FOUNDER BUSINESS NAME</p>
                        <p className="mb"><FontAwesomeIcon icon={faLocationDot} />  123 Dummy Road, Lorem Ipsum, Country </p>
                        <p className="mb"><FontAwesomeIcon icon={faPhone} />  +00 1234 5678 9012  </p>
                        <p className="mb"><FontAwesomeIcon icon={faEnvelope} />  contact@websitename.com </p>
                        <p className="mb"><FontAwesomeIcon icon={faEarthAsia} />  www.wesitename.com </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default visitingCard;
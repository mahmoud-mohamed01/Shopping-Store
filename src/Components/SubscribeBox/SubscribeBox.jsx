import React from "react";
import"./SubscribeBox.css"


function SubscribeBox()
{
    return(
    <div className="subscribe-box">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div className="subscribe-btn">
            <input type="email" placeholder="your email id"></input>
            <button>Subscribe</button>

        </div>

    </div>)
}


export default SubscribeBox;

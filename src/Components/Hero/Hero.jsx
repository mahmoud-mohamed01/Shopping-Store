import React from "react";
import "./Hero.css";
import handicon from"../Assets/hand_icon.png"
import heroimg from"../Assets/herooo.png"
import arowimg from"../Assets/arrow.png"


function Hero()
{
return(
        <div className="hero">

            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="wave-icon">
                        <p>new</p>
                        <img src={handicon} alt="" />
                    </div>

                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-left-btn">
                    <div>Latest Collection </div>
                    <img src={arowimg} alt="" />

                </div>

            </div>

            <div className="hero-right"> 
            <img src={heroimg} alt="" />
            </div>

        </div>
    )

}

export default Hero;
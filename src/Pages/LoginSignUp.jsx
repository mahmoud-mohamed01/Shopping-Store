import React, { useState } from "react";
import "./Css/LoginSignup.css";


function LoginSignUp()
{

    const[loginstate,setLogin]=useState(true);

    function handelClick()
    {
        if(loginstate)
        {
            setLogin(false)

        }
        else
        {
            setLogin(true)
        }
    }
 return(
    <div className="sign-up">


        <div className="sign-up-box">
            <h1>{loginstate?"Login":"Sign Up"}</h1>
            <form action="/" method="get">
            <div className="inputs">
                <input type="text" name="user" placeholder="user" style={loginstate?{display:"none"}:{display:"block"}} />
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-btn">

                <button>Continue</button>
            </div>

            <p>{loginstate?"Create an Accoun?":"Already have account?"}<button type="button" onClick={handelClick} className="login-singup-btn">Click here</button></p>
            <div className="check-box" style={loginstate?{display:"none"}:{display:"flex"}}>
                <input type="checkbox" />
                <p>by Continuing, i agree to terms of use & privacy</p>
            </div>



            </form>

        </div>


    </div>
 )

}

export default LoginSignUp;
import React from "react";
import logoicon from"../Assets/logo_big.png"
import "./Footer.css"
import whatsappicon  from"../Assets/whatsapp_icon.png"
import instgramicon  from"../Assets/instagram_icon.png"
import pintestericon  from"../Assets/pintester_icon.png"

let date=new Date()

function Footer()
{
    return(
        <div className="footer">
            <div className="top">
                <img src={logoicon} alt="" />
                <h2>SHOPPER</h2>
            </div>

            <ul className="mid">
                <li>Company</li>
                <li>products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>        

            <div className="bottom">
                <img src={instgramicon} alt="" />
                <img src={whatsappicon} alt="" />
                <img src={pintestericon} alt="" />
            </div>

            
                <hr/>
                <p> Copyright @{date.getFullYear()} All Rights Reserved. </p>


        </div>
    )
}

export default Footer;
import React from "react";
import "./Offer.css"
import bannerimage from"../Assets/exclusive_image.png"


function Offers()
{
    return(
              <div className="offer">
                <div className="left-side">
                    <h2>Exclusive</h2>
                    <h2>Offers For You</h2>
                    <p> Only On Best Sellers Products</p>
                    <button>Check now</button>
                

                    

                </div>

                <div className="right-side">
                    <img src={bannerimage} alt="" />

                </div>


              </div>
         )


}

export default Offers;
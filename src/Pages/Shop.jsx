import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import SubscribeBox from "../Components/SubscribeBox/SubscribeBox";


function Shop()
{

    return(
            <div>
             <Hero></Hero>
             <Popular></Popular>
             <Offers></Offers>
             <NewCollections></NewCollections>
             <SubscribeBox></SubscribeBox>
            </div>

    )
}

export default Shop;
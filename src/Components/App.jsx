import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "../Pages/Shop";
import ShopCategory from"../Pages/ShopCategory";
import Cart from"../Pages/Cart";
import LoginSignUp from"../Pages/LoginSignUp";
import Products from "../Pages/Products.jsx";
import Footer from "./Footer/Footer.jsx";
import menBanner from"./Assets/banner_mens.png"
import womenBanner from"./Assets/banner_women.png"
import kidsBanner from"./Assets/banner_kids.png"



function App()
{
    return(
        <div className="container">
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Shop></Shop>}></Route>
                    <Route path="/men" element={<ShopCategory banner={menBanner} category="men"></ShopCategory>}></Route>
                    <Route path="/women" element={<ShopCategory banner= {womenBanner} category="women"></ShopCategory>}></Route>
                    <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kid"></ShopCategory>}></Route>
                    <Route path="/product" element={<Products></Products>}>
                        <Route path=":productId" element={<Products></Products>}></Route>
                    </Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                    <Route path="/login" element={<LoginSignUp></LoginSignUp>}></Route>


                </Routes>
                <Footer></Footer>
            </BrowserRouter>


        </div>
    )
}

export default App;

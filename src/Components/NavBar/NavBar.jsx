import React,{useState} from "react";
import "./Navbar.css";
import navbarlog from"../Assets/logo.png";
import carticon from"../Assets/cart_icon.png";
import { Link } from "react-router-dom";



function NavBar()
{

    const [chosenMenu,setChosenMenu]=useState("shop");
    return(
        <div className="nav-bar">

            <div className="nav-logo">
                <img src={navbarlog}></img>
                <p> SHOPPER</p>
            </div>

            <ul className="menu-list">
                <li onClick={()=>{setChosenMenu("shop")}}>  <Link style={{textDecoration:"inherit" ,color:"inherit"}} to={"/"}>Shop</Link>       {chosenMenu==="shop"?<hr/>:null}</li>
                <li onClick={()=>{setChosenMenu("men")}}>   <Link style={{textDecoration:"inherit" ,color:"inherit"}} to={"/men"}>Men</Link>     {chosenMenu==="men"?<hr/>:null}</li>
                <li onClick={()=>{setChosenMenu("women")}}> <Link style={{textDecoration:"inherit" ,color:"inherit"}} to={"/women"}>Women</Link> {chosenMenu==="women"?<hr/>:null}</li>
                <li onClick={()=>{setChosenMenu("kids")}}>  <Link style={{textDecoration:"inherit" ,color:"inherit"}} to={"/kids"}>Kids</Link>   {chosenMenu==="kids"?<hr/>:null}</li>                
            </ul>

            <div className="navbar-btn-cart">
                <Link to={"/login"}> <button>Login</button>  </Link>
                <Link to={"/cart"}><img src={carticon} alt="" /></Link>
                <div className="cart-counter">0</div>
            </div>
            
        </div>
    )
}

export default NavBar;
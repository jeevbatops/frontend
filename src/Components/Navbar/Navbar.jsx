import React, { useState } from "react"
import './Navbar.css'
import logo from '../Assets/Assets/logo.png'
import cart_icon from '../Assets/Assets/cart_icon.png'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu,setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
           <li onClick={()=>{setMenu("shop")}} > <Link to='/' style={{textDecoration: 'none'}}> Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}} ><Link to='/mens' style={{textDecoration: 'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}} ><Link to='/womens' style={{textDecoration: 'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("kids")}} ><Link to="/kids" style={{textDecoration: 'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button><Link to='/login' style={{textDecoration: 'none'}}>Login</Link></button>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link><img src={cart_icon} alt=""/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
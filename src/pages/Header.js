import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header(props){

    const cartData = useSelector(state => state)
    const cartLength = cartData.cartItem.length
    
    //console.warn(props.data)
    return(
        

        <>
<header className="fixedHeader">
    <div className="navtop">   
        <div className="container">
            <div className="uppernav">
                GET 20% SALE WITH COUPONE CODE <span title="click for copy Coupon Code">CGBNJKI25</span>
            </div>
        </div>
    </div>
    <div className="main-nav">
        <div className="container">
            <div className="flex">
                <div className="logo navbar-light">
                    <Link to="/"><img  src="/assets/images/logo/logo.png" /> </Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <nav>
                    <div className="close">
                        <span className="close-btn"><i className="fas-fa-times"></i></span>
                    </div>
                    <div className="navigation">
                        <ul>                  
                            <li className="active"><Link to="/shop">Hand Bags</Link></li>
                            <li><Link to="/shop">Accessories</Link></li>
                            <li><Link to="/shop">Sales</Link></li>
                        </ul>
                    </div>
                    <div className="more">
                        <ul>
                            <li>
                                <div className="searchBox">
                                    <form action="">
                                        <input type="text" placeholder="Search here..." />
                                        <input type="submit" />
                                    </form>
                                </div>
                                <i className="fas fa-search"></i>
                            </li>
                            <li>
                                <Link to="/"><img src="/assets/images/icons/user.png" alt="" /></Link>
                            </li>
                            <li>
                                <Link to="/"><img src="/assets/images/icons/heart.png" alt="" /></Link>
                            </li>
                            <li>
                                <Link to="/cart"><img src="/assets/images/icons/cart.png" alt="" /> <sup>{cartLength}</sup></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
        </>
    ) 
}

export default Header;
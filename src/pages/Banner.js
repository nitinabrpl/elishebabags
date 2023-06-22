import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";


function Banner(props){
    return(
        <>
<section className="banner">
    <img src="/assets/images/bg/banner-product.jpg" alt="" />
    <div className="container">
        <h1>{props.title}</h1>
    </div>
</section>
        </>
    )
}

export default Banner;
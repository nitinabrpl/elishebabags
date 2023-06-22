import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Banner from './Banner'

function Contact(){
    return(
        <>
        <Banner title="About" />
<section className="abtPage">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <figure>
                    <img src="/assets/images/more/abt-1.jpg" alt="" />
                </figure>
            </div>
            <div className="col-md-6">
                <figcaption>
                    <h1>About</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                </figcaption>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Contact;
import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Banner from './Banner';
function Contact(){
    return(
        <>
        <Banner title="Contact" />
<section className="contactPage">
    <div className="container">
       <div className="conInfo">
           <div className="row">
                <div className="col-md-6">
                    <div className="box">
                        <h2>Get A Quote</h2>
                        <ul>
                            <li>
                                <div className="icon">
                                    <img src="./assets/images/icons/map.png" alt="" />
                                </div>
                                <div className="contact">
                                    <b>Office Address</b>
                                    <Link to="#">Lorem Ipsum, United States</Link>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src="./assets/images/icons/mail.png" alt="" />
                                </div>
                                <div className="contact">
                                    <b>Email Address</b>
                                    <Link to="mailto:elishebabags@gmail.com">elishebabags@gmail.com</Link>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src="./assets/images/icons/phone.png" alt="" />
                                </div>
                                <div className="contact">
                                    <b>Phone Number</b>
                                    <Link to="#">+1 416-836-4232</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="formBox">
                        <h2>Contact</h2>
                        <form action="">
                            <div className="grp name">
                                <input type="text" className="form-control" placeholder="Enter Your Name " />
                            </div>
                            <div className="grp email">
                                <input type="text" className="form-control" placeholder="Enter Email Address" />
                            </div>
                            <div className="grp subject">
                                <input type="text" className="form-control" placeholder="Enter Subject" />
                            </div>
                            <div className="grp number">
                                <input type="text" className="form-control" placeholder="Enter Phone no." />
                            </div>
                            <div className="grp">
                                <textarea className="form-control" placeholder="Your Message"></textarea>
                            </div>
                            <div className="grp">
                                <input type="submit" className="btn" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
           </div>
       </div>
    </div>
</section>
        </>
    )
}

export default Contact;
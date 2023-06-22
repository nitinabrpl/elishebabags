import {Link} from "react-router-dom";


function Footer(){
 return(
    <>
<section className="subscribe">
    <div className="container">
        <div className="flex">
            <h3>Sign Up For Emails And Get 10% Off!</h3>
            <div className="formBox">
                <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
            <div className="social">
                <ul>
                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-pinterest"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<footer>
    <div className="container">
        <div className="f1">
           <div className="flex">
               <div className="b1">
                   <div className="footer-logo">
                       <Link to="/"><img src="/assets/images/logo/logo.png" alt="" /></Link>
                   </div>
                   <div className="content">
                       <p>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </p>
                       <Link to="/about">Read More</Link>
                   </div>
               </div>
               <div className="b2">
                   <h3>Customer Services</h3>
                   <ul>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                       <li><Link to="/">Help and advice</Link></li>
                       <li><Link to="/">Shipping & Returns</Link></li>
                       <li><Link to="/">Terms and conditions</Link></li>
                       <li><Link to="/">Refund Policy</Link></li>
                   </ul>
               </div>
               <div className="b2">
                  <h3>Our Company</h3>
                   <ul>
                       <li><Link to="/shop">Bags</Link></li>
                       <li><Link to="/shop">Purse</Link></li>
                       <li><Link to="/shop">Belt Scarfs</Link></li>
                       <li><Link to="/shop">Custom Jewelry</Link></li>
                       <li><Link to="/shop">Umbrella</Link></li>
                   </ul>
               </div>
               <div className="b2 b3">
                   <h3>About Elisheba bags</h3>
                   <ul>
                       <li><i className="fas fa-home"></i> <Link to="/">Lorem Ipsum, United States</Link></li>
                       <li><i className="fas fa-phone-alt"></i> <Link to="tel:+1 416-836-4232">+1 416-836-4232</Link></li>
                       <li><i className="fas fa-envelope"></i> <Link to="mailto:elishebabags@gmail.com">elishebabags@gmail.com</Link></li>
                   </ul>
               </div>
           </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="flex jcsb">
                <p>© 2023 All Right Reserved. Privacy Policy.</p>
                <img src="/assets/images/icons/cards.png" alt="" />
            </div>
        </div>
    </div>
</footer>

    </>
 )
}

export default Footer;
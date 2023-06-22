import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Banner from './Banner';

function Shop(props){
    
    const addtoCart = function(e){
        
        props.cartCount(11)
             
    }
    return(
        <>
        <Banner />
<section class="productPage">
    <div class="container">
       <div class="headingBox"><h1 class="dashed">Latest Product</h1></div>
       <div class="row">
           <div class="col-md-3">
               <aside>
                   <div class="box">
                       <h3>Categories</h3>
                       <ul>
                           <li><Link to="/">Belt</Link></li>
                           <li><Link to="/">Scarfs</Link></li>
                           <li><Link to="/">Custom jewelry</Link></li>
                           <li><Link to="/">Umbrella</Link></li>
                           <li><Link to="/">Purse</Link></li>
                       </ul>
                   </div>
                   <div class="box color">
                       <h3>Color</h3>
                       <ul>
                           <li><Link to="/"><b class="black"></b> <span> Black</span></Link></li>
                           <li><Link to="/"><b data-color="Pink" class="pink"></b> <span> Pink</span></Link></li>
                           <li><Link to="/"><b class="green"></b> <span> Green</span></Link></li>
                           <li><Link to="/"><b class="yellow"></b> <span> Yellow</span></Link></li>
                           <li><Link to="/"><b class="yellow"></b> <span> Brown</span></Link></li>
                       </ul>
                   </div>
               </aside>
           </div>
           <div class="col-md-9">
               <main>
        <div class="productBox">
            <div class="flex">
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p1.jpg" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link onClick={addtoCart} class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p2.png" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p3.jpg" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p4.jpg" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p5.png" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p6.png" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p7.png" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p8.jpg" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
                <div class="item">
                    <div class="box">
                       <div class="moreBox">
                           <ul>
                               <li><Link to="/"><i class="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i class="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src="./assets/images/more/p9.jpg" alt="" /></figure>
                        <figcaption>
                            <div class="innerBox">
                                <div class="rating">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>Elegant Crossbody bag</h4>
                                <h6 class="price"><del>$180.00</del> <span>$100.00</span></h6>
                            </div>
                            <Link to="/" class="btn"><i class="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
               </main>
           </div>
       </div>
    </div>
</section>
        </>
    )
}

export default Shop;
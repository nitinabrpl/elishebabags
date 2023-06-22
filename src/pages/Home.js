import React, { useEffect, useState } from "react";

import OwlCarousel  from "react-owl-carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AOS from 'aos';
import {addToCart} from '../redux/Actions/Action'

function Home(){
    AOS.init({easing: 'ease-in-out-sine',once:true})

    const [productData,setProductData] = useState([]);
    const dispatch = useDispatch()
    const getdata = useSelector(state=> state.cartItem)
    
    const addCart = (e)=>{
        e.preventDefault();
        alert(0);
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(resp=>resp.json()).then((result)=>{
            setProductData(result);
            
        })
 
        
        
     },[])

    return(
        <>

<section className="slider">
    <OwlCarousel className='owl-carousel slider-carousel owl-theme' autoplay={3000} slideSpeed={5000} paginationSpeed={2000} rewindSpeed={1000} dots={false} nav={true} navText={["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]} items={1} loop margin={0}>
        
        <div className="item">
            <img className="imgBanner" src="/./assets/images/slider/slider-1.jpg" />
            <div className="item-content text-top" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="container">
                    <div className="content-box" data-aos="fade-down">
                        <div className="contentBox">
                            <h2>Welcome To</h2>
                            <h1>Elish'eba Bags</h1>
                            <p>Fashion | Durability | Quality</p>
                            <Link to="/shop" className="btn">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</OwlCarousel>
</section>
<section className="qty">
    <div className="container">
        <div className="flex">
            <div className="box">
                <figure><img src="./assets/images/more/delivery.png" alt="" /></figure>
                <h4>Superfast delivery</h4>
                <p>Free Shipping for orders over $130</p>
            </div>
            <div className="box">
                <figure><img src="./assets/images/more/hand.png" alt="" /></figure>
                <h4>Best price guarantee</h4>
                <p>Within 30 days for an exchange</p>
            </div>
            <div className="box">
                <figure><img src="./assets/images/more/customer-support.png" alt="" /></figure>
                <h4>Secure online shopping</h4>
                <p>Within 30 days for an exchange</p>
            </div>
            <div className="box">
                <figure><img src="./assets/images/more/award.png" alt="" /></figure>
                <h4>High quality products</h4>
                <p>Pay with Multiple Credit Card</p>
            </div>
        </div>
    </div>
</section>
<section className="cate">
    <div className="container">
        <div className="grid">
            <div className="box">
                <Link to="/category/jewelery"><figure>
                    <img src="./assets/images/more/c1.jpg" alt="" />
                </figure></Link>
            </div>
            <div className="box">
                <Link to="/category/electronics"><figure>
                    <img src="./assets/images/more/c2.jpg" alt="" />
                </figure></Link>
            </div>
            <div className="box">
                <Link to="/category/men"><figure>
                    <img src="./assets/images/more/c3.jpg" alt="" />
                </figure></Link>
            </div>
            <div className="box">
                <Link to="/category/women"><figure>
                    <img src="./assets/images/more/c4.jpg" alt="" />
                </figure></Link>
            </div>
        </div>
    </div>
</section>
<section className="product">
    <div className="container">
        <h1 className="dashed">Trending Collection</h1>
        <div className="productBox">
            <OwlCarousel className='owl-carousel product-carousel owl-theme' autoplay={3000} slideSpeed={5000} dots={false} nav navText={["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]} items={4} loop margin={0} responsive={
			{1080:{items:4},
			768:{items:3},
			600:{items:2},
			425:{items:1},
			360:{items:1},
			30:{items:1}}
			
		}>
            {
            productData ? productData.map((v,i)=>{
                if(productData[i].category == "women's clothing"){
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={productData[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({productData[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+productData[i].id}><h4>{productData[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${productData[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === productData[i].id ? true : false)} onClick={
                        (e)=>{ dispatch(addToCart({id:productData[i].id,pice:productData[i].price,img:productData[i].image,name:productData[i].title,qty:1,material:'Leather',color:'pink',category:productData[i].category}));
                    e.preventDefault()
                    }
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === productData[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }
            }) : 'Loading...'
            
        }
            </OwlCarousel>
        </div>
    </div>
</section>
<section className="product bt">
    <div className="container">
        <h1 className="dashed">Featured Products</h1>
        <div className="productBox">
        <OwlCarousel className='owl-carousel product-carousel owl-theme' autoplay={3000} slideSpeed={5000} dots={false} nav navText={["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]} items={4} loop margin={0} responsive={
			{1080:{items:4},
			768:{items:3},
			600:{items:2},
			425:{items:1},
			360:{items:1},
			30:{items:1}}
			
		}>
            {
            productData ? productData.map((v,i)=>{
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={productData[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({productData[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+productData[i].id}><h4>{productData[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${productData[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === productData[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:productData[i].id,pice:productData[i].price,img:productData[i].image,name:productData[i].title,qty:1,material:'Leather',color:'pink',category:productData[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === productData[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }) : 'Loading...'
            
        }    
        </OwlCarousel>
        </div>
    </div>
</section>
<section className="summer-sale">
    <div className="container">
        <div className="box">
            <h4>Extra  <span>30% Off</span>  Online</h4>
            <h1>Summer Season Sale</h1>
            <h3>Free shipping on orders over $99</h3>
        </div>
    </div>
</section>
        </>
    )
}

export default Home;
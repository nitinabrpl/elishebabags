import React from "react";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Banner from './Banner';
import { useDispatch, useSelector } from "react-redux";
import {addToCart, updateCart} from '../redux/Actions/Action';

function ProductDetail(props){
    
    const cartData = useSelector(state=> state)
    const dispath = useDispatch();
    const prm = useParams();
    //console.warn('qty',cartData)
    //console.warn('data',cartData.cartItem) 
    
    
                  
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);
    const [rate,setRate] = useState(0);
    const [isCart,setIsCart] = useState(false);
    const [iQty,setiQty] = useState(1);
    const [successAlert,setSuccessAlert] = useState(false);
    const [cartItem,setCartItem] = useState();
    const [newQty,setNewQty] = useState(1);

    

    useEffect(()=>{
       fetch('https://fakestoreapi.com/products/'+prm.id).then(resp=>resp.json()).then((result)=>{
           setData(result);
           console.warn(data)
           setCount(result.rating.count);
           setRate(result.rating.rate);
           console.warn('pd page',cartData.cartItem)
           cartData.cartItem.map((v,i)=>{
               if(v.id == prm.id){
                console.warn('qty',v.qty)
                setNewQty(v.qty);
                setIsCart(true)
               }else{
                setIsCart(false)
               }
           })

        // if(cartData.cartItem.find(item => item.id == prm.id)){
        //     setIsCart(true)
        //     setCartItem(cartData.cartItem.find(item => item.qty))
        //     //console.warn('newQty', cartItem.qty)
        // }else{
        //     setIsCart(false)
        // }           
            
        
       })  

      
    },[])
   
    
    

   function updateQuantity(e){
        const val = parseInt(e.target.value)
        setiQty(val)
        setNewQty(val)
    }
    function increment(){
        // setiQty(iQty + 1)
        setNewQty(newQty + 1)
    }
    function dicrement(){
        (iQty >=2)?setiQty(iQty - 1) : setiQty(1) 
        (newQty >=2)?setNewQty(newQty - 1) : setNewQty(1) 
    }
    function timeId(){
        setSuccessAlert(true)
        setTimeout(() => {
            setSuccessAlert(false)
        }, 3000)
    }


    
      
    return(
        <>
        <Banner title="Product Details" />
<section className="nit-product-detail-page nit-common-page">
    <div className="container">
        <div className="nit-product-detail-box">
            <div className="row">
                <div className="col-md-6">
                    <div className="nit-img-box">
                        <div className="nit-main-img">
                            <figure><img src={data.image} alt=""/></figure>
                        </div>
                        <div className="nit-img-list">
                            <ul>
                                <li className="active"><figure><img src={data.image} alt=""/></figure></li>
                                <li><figure><img src={data.image} alt=""/></figure></li>
                                <li><figure><img src={data.image} alt=""/></figure></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="nit-product-content">
                        <h3 className="nit-heading">{data.title}</h3>
                        <div className="nit-rating">
                            {rate} 
                            <ul>
                                <li className="ml-2"><i className="fas fa-star"></i></li>
                            </ul>
                            <span>({count} Reviews)</span>
                        </div>
                        <div className="nit-price">
                            <del>${parseFloat(data.price * (100/75)).toFixed(2)}</del><span>${parseFloat(data.price).toFixed(2)} + tax</span>
                        </div>
                        <div className="nit-short-description">
                            {/* <p>{data.description}</p> */}
                        </div>
                        <div className="nit-more-info">
                            <ul className="info">
                                <li><b>SKU:  </b> <span>SKUPT09{data.id}</span></li>
                                <li><b>Material:</b> <span>Hand PU Leather</span></li>
                                <li><b>Categories:</b> <span>{data.category}</span></li>
                                <li><b>Size:</b> <span>30*13*23cm</span></li>
                            </ul>
                            <div className="colorBox">
                                <div className="box color">
                                   <h3>Color: </h3>
                                   <ul>
                                       <li><Link to="#"><b className="black"></b> <span> Black</span></Link></li>
                                       <li><Link to="#"><b data-color="Pink" className="pink"></b> <span> Pink</span></Link></li>
                                       <li><Link to="#"><b className="green"></b> <span> Green</span></Link></li>
                                       <li><Link to="#"><b className="yellow"></b> <span> Yellow</span></Link></li>
                                       <li><Link to="#"><b className="yellow"></b> <span> Brown</span></Link></li>
                                   </ul>
                               </div>
                            </div>
                        </div>
                        <div className="nit-qty aib">
                            <div className="nit-right-box">
                                <div className="flex">
                                   <h3>Qty :</h3>
                                    <div className="nit-increment">
                                        <span className="minus" onClick={()=>{dicrement()}}>-</span>
                                        {
                                            setIsCart ? <input type="number" onChange={e=>updateQuantity(e)} value={newQty} className="val" />:<input type="number" onChange={e=>updateQuantity(e)} value={iQty} className="val" />
                                        }
                                        {/* <input type="number" onChange={e=>updateQuantity(e)} value={iQty} className="val" /> */}
                                        <span className="plus" onClick={()=>{increment()}}>+</span>
                                    </div>
                                </div>
                                {
                                    (successAlert)  ?
                                    <div className="alert alert-success">Quantity Updated !!</div>
                                     : ''
                                }
                                <div className="nit-cart-btn-box">
                                    {
                                        (isCart) ?
                                            <Link to="#" className="nit-cart-btn" onClick={
                                                ()=>{
                                                    dispath(updateCart({id:data.id,pice:data.price,img:data.image,name:data.title,qty:iQty,material:'Leather',color:'pink',category:data.category}));
                                                    timeId();
                                                }}><i className="fas fa-shopping-cart"></i> <span>    Update Cart</span></Link>
                                    :
                                            <Link to="#" className="nit-cart-btn" onClick={
                                                ()=>{
                                                    dispath(addToCart({id:data.id,pice:data.price,img:data.image,name:data.title,qty:iQty,material:'Leather',color:'pink',category:data.category}))
                                                    setIsCart(true)
                                                }
                                                }><i className="fas fa-shopping-cart"></i> <span>    Add to Cart</span></Link>
                                        
                                    }
                                    <Link to="" className="nit-wishlist"><i className="far fa-heart"></i> <span>add to Wishlist</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="nit-social-share">
                            <b>Share:</b>
                            <ul>
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="nit-main-description">
                        <ul className="nav nav-tabs">
                            <li><Link  className="active" data-toggle="tab" to="#menu1">Description</Link></li>
                            {/* <li><Link data-toggle="tab" to="#menu2">Reviews</Link></li> */}
</ul>

<div className="tab-content">
  <div id="menu1" className="tab-pane active">
        <p>{data.description}</p>
      {/* <ul>
          <li><span>Weight</span> <span>150 g</span></li>
          <li><span>Material</span> <span>Brass</span></li>
          <li><span>Diameter</span> <span>7.5 inches</span></li>
      </ul> */}
  </div>
  <div id="menu2" className="tab-pane fade">
    <h3>Reviews</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}

export default ProductDetail;
import React, { Component, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearCart, removeCart, updateCart, cartCheckout } from '../redux/Actions/Action';
import Banner from './Banner';


function Cart(props){
    
    const cartData = useSelector(state => state.cartItem);
    const [newQty,setNewQty]= useState(1)
    // const [cartItems,setCartItems]= useState([])
    const dispatch = useDispatch();
    const cartPrice = [];
    cartData.map((item,i)=>{
        cartPrice.push(item.pice * item.qty)
    })
    const cartTotal = cartPrice.reduce((a,b)=> a + b,0)

    const d = new Date();
    const year = d.getFullYear()
    const day = d.getDate()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[d.getMonth()];

    const date = month+' '+day+', '+year

    
    
    return(
    <>
        <Banner title="Cart" />
        {
            (cartData.length <=0)? <><h1 className='text-center py-5 my-5'>Empty Cart</h1></>
            :
<section className="nit-cart-page">
    <div className="container">
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Categories</th>
                        <th>Price</th>
                        <th className="text-center">Quantity</th>
                        <th>Subtotal</th>
                        <th><i className="fas fa-trash"></i></th>
                    </tr>
                </thead>
                <tbody>
        {
        cartData.map((item,i)=>{
            
        return(
        <tr key={i} className={'tr'+i}>
                        <td><figure><Link to={"/shop/"+item.id}><img src={item.img} alt="" /></Link></figure></td>
                        <td><Link to={"/shop/"+item.id}>{item.name.substr(0,15)}...</Link></td>
                        <td><Link to={"/shop/"+item.id}>{item.category}</Link></td>
                        <td><Link to={"/shop/"+item.id}>£<span className={'crtPr'+(i+1)}>{item.pice}</span></Link></td>
                        <td>
                           <div className="nit-incre">
                            <div className="nit-increment"><span className="minus"  onClick={
                                ()=>{
                                let q = document.querySelector('.crtIn'+(i+1));
                                if(q.value== 1){
                            }else{
                                q.value = (parseInt(q.value)- 1);
                            }
                               
                            }
} ><i className="fa fa-minus"></i></span><input type="number" defaultValue={item.qty} className={'crtIn'+(i+1)} /><span className="plus" onClick={
                                ()=>{
                                let q = document.querySelector('.crtIn'+(i+1));
                                let p = document.querySelector('.crtPr'+(i+1));
                                let sp = document.querySelector('.crtSubPr'+(i+1));
                                q.value = (parseInt(q.value)+ 1);
    
   sp =  p.innerHTML * q.value ;

   dispatch(updateCart({id:item.id,qty:parseInt(q.value)}))
   console.warn('cart',{id:item.id,qty:parseInt(q.value)});
    
                            }
}><i className="fa fa-plus"></i></span></div>
                           </div>
                        </td>
                        <td><b>£<span className={'crtSubPr'+(i+1)}>{item.pice * item.qty}</span></b></td>
                        <td><i onClick={()=>{
                           dispatch(removeCart(item.id))
                        }
} className="fas fa-times"></i></td>
                    </tr>
        )
    })
        }
                    
                </tbody>
            </table>
        </div>
        <div className="nit-cart-footer">Total  £ {(cartTotal).toFixed(2)}</div>
        <div className="cart-summary">
            <div className="cart-summary-box">
               <h1>Cart Summary</h1>
                <ul>
                    <li>
                        <span>Total :</span>
                        <b>£ {(cartTotal).toFixed(2)}</b>
                    </li>
                    <li>
                        <span>Shipping :</span>
                        <b>£ 06.00</b>
                    </li>
                    <li>
                        <span>Coupon :</span>
                        <b>-- --</b>
                        <div className="couponBox">
                            <form action="">
                                <input type="text" />
                                <input type="submit" value="Apply Coupon" />
                            </form>
                        </div>
                    </li>
                    <li>
                        <span>G.S.T :</span>
                        <b>£ 02.00</b>
                    </li>
                    <li>
                        <span>Grand Total :</span>
                        <b>£ {((cartTotal) + (6.00) + (2.00)).toFixed(2)}</b>
                    </li>
                </ul>
            </div>
        </div>
        <div className="nit-cart-btns">
            <Link to="/cart" onClick={()=>{dispatch(clearCart(0))}} className="btn btn-danger">Empty Cart</Link>
            <Link to="/checkout" onClick={()=>{dispatch(cartCheckout({total:(cartTotal).toFixed(2),shipping:6,gst:2,grandTotal:((cartTotal) + (6.00) + (2.00)).toFixed(2),date:date,orderId:'101'}))}} className="btn btn-warning">Check Out</Link>
        </div>
    </div>
</section>
}
    </>
    )
}
export default Cart;
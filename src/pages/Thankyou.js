import React from 'react'
import { connect, useSelector } from 'react-redux';
import Banner from './Banner'

function Thankyou() {
    
    const cartCheckout = useSelector(state=> state);
console.warn(cartCheckout.address[0].e)
    
  return (
    <>
    <Banner title="Thank You" />
  <section className="thankyou">
    <div className="container">
        <h2>Thank You, {cartCheckout.address[0].fn +' '+cartCheckout.address[0].ln}.</h2>
        <h3> Your order has been received.</h3>
        <p>Login with this email : <b><big>{cartCheckout.address[0].e}</big></b> and check your order in Dashboard.</p>
        <ul>
            <li>Order No. : <b> {cartCheckout.cartCheckout[0].orderId}</b></li>
            <li>Date : <b> {cartCheckout.cartCheckout[0].date}</b></li>
            <li>Total : <b> $ {cartCheckout.cartCheckout[0].grandTotal}</b></li>
            <li>Payment Method : <b> Cash on Delivery</b></li>
        </ul>
        <div className="order-detail">
            <h1 className="">Order Details</h1>
            <div className="table-responsive">
                <table className="table table-hover table-stripe table-bordered">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         cartCheckout.cartItem.map((v,i)=>{
                             return(
                                <tr className="bg-default">
                                    <td className="w-75">{v.name} <b><i className="fas fa-times mx-3"></i></b> {v.qty}</td>
                                    <td>$ {(v.pice * v.qty) +' ('+v.pice+' x '+v.qty+')' }</td>
                                </tr>
                             )
                         })   
                        }
                        <tr className="border-top2">
                            <td>Subtotal : </td>
                            <td>$ {cartCheckout.cartCheckout[0].total}</td>
                        </tr>
                        <tr>
                            <td>Shipping : </td>
                            <td>$ {cartCheckout.cartCheckout[0].shipping}</td>
                        </tr>
                        <tr>
                            <td>GST : </td>
                            <td>$ {cartCheckout.cartCheckout[0].gst}</td>
                        </tr>
                        <tr>
                            <td>Payment Method : </td>
                            <td>Cash on Delivery</td>
                        </tr>
                        <tr>
                            <th><big>Total :</big></th>
                            <th><big>$ {cartCheckout.cartCheckout[0].grandTotal}</big></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Thankyou
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addressInfo } from '../redux/Actions/Action'
import Banner from './Banner'

function Checkout() {

    
    const navigate = useNavigate();

    const [email,setEmail] = useState()
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [add1,setAdd1] = useState()
    const [add2,setAdd2] = useState()
    const [city,setCity] = useState()
    const [state,setState] = useState()
    const [zipcode,setZipcode] = useState()
    const [phone,setPhone] = useState()
    const [comment,setComment] = useState()
    const [checkAc,setCheckAc] = useState(false)

    const guestData = {fn:fname,ln:lname,e:email,a1:add1,a2:add2,c:city,s:state,z:zipcode,com:comment}

    const cartData = useSelector(state=> state.cartItem)
    const dispatch = useDispatch();
    const [userApi, serUserApi] = useState()
    
    const url = 'http://localhost/api/elishebabags/api.php?id=nit&table=users';
    useEffect(() => {
        axios.get(url).then((res=>{
            serUserApi(res)
        }))
    }, [])
    

    const cartPrice = []
    cartData.map((val,i)=>{
        cartPrice.push(val.pice)
    })
    const cartTotal = cartPrice.reduce((a,b)=>a+b,0);

    const formSubmit = (e)=>{
        e.preventDefault();
        console.table(cartData)
        console.table(guestData)
        //console.warn()
        navigate('/thankyou');
        //console.warn(userApi)
        
        // userApi.data.map((v,i)=>{
        //     if(email == v.email){
        //         setCheckAc(true)
        //     }
        // })
    }

    const checkEmailId = (e)=>{
        
        console.warn(email)
    }

  return (
    <>
    <Banner title="Checkout" />
<section className="nit-cart-page nit-checkOut-page">
    <div className="container">
    <form onSubmit={formSubmit}>
        <div className="row">
            <div className="col-md-7">
                <div className="nitHeader">
                    <h3 className="mb-0">Contact Email</h3>
                </div>
                <div className="nitBody">
                    <div className="form-group">
                        <label htmlFor="">Email Address</label>
                        <input type="email" onBlur={(e)=>{checkEmailId()}} onChange={e=> setEmail(e.target.value)} value={email} required placeholder="@gmail.com" className="form-control" />
                    </div>
                </div>
                <div className="nitHeader mt-4">
                    <h3 className="mb-0">Shipping Information</h3>
                </div>
                <div className="nitBody">
                    <div className="row mb-0">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text" onChange={e=> setFname(e.target.value)} value={fname} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <input type="text" onChange={e=> setLname(e.target.value)} value={lname} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Address Line1</label>
                                <input type="text" onChange={e=> setAdd1(e.target.value)} value={add1} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Address Line2</label>
                                <input type="text" onChange={e=> setAdd2(e.target.value)} value={add2} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">City</label>
                                <input type="text" onChange={e=> setCity(e.target.value)} value={city} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">State</label>
                                <input type="text" onChange={e=> setState(e.target.value)} value={state} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Zip Code</label>
                                <input type="text" onChange={e=> setZipcode(e.target.value)} value={zipcode} required className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text" onChange={e=> setPhone(e.target.value)} value={phone} required className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="nitHeader mt-4">
                    <h3 className="mb-0">Comments (Optional)</h3>
                </div>
                <div className="nitBody">
                    <div className="row mb-0">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Comments</label>
                                <input onChange={e=> setComment(e.target.value)} value={comment} type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-success" onClick={()=>{dispatch(addressInfo(guestData))}} type="submit">Place Order</button>
                            <a className="btn btn-danger btn2" href="cart.html">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
               <div className="right-cart-content">
                   <div className="nitHeader">
                        <h3 className="text-center mb-0">Summary</h3>
                    </div>
                    <div className="nitBody">
                        <div className="nit-flex">
                            <h6>ITEM</h6>
                            <h6>Price</h6>
                        </div>
                        {
                            cartData.map((item,i)=>{
                                return(
                                    <div key={i} className="nit-flex">
                                        <p>{item.name.substr(0,40)}...</p>
                                        <h6>${item.pice}</h6>
                                    </div>
                                )
                            })
                        }
                        <hr />
                        <div className="nit-flex mb-0">
                            <h6>Total</h6>
                            <h6>${cartTotal}</h6>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </form>
    </div>
</section>
    </>
  )
}

export default Checkout
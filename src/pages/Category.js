import React from "react";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Banner from './Banner';
import Products,{} from '../data/products';
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../redux/Actions/Action'

function Category(props){
    
    const prm = useParams()
    const dispatch = useDispatch()
    const getdata = useSelector(state=> state.cartItem)
    //console.warn('shop',getdata.find(item=> item.id === 1) ? 'hii' : 'bye')
                  
    if(prm.name == 'men'){
        prm.name = "men's clothing";
    }
    if(prm.name == 'women'){
        prm.name = "women's clothing";
    }
    const [pName,setPName] = useState([prm.name]);
    const [data,setData] = useState([]);
    const [active, setActive] = useState(prm.name)
    const [categories,setCategories] = useState([]);
    const [categoryFilter,setCategoryFilter] = useState(prm.name);
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products').then(resp=>resp.json()).then((result)=>{
           setData(result);
           
       })

       fetch('https://fakestoreapi.com/products/categories').then(resp=>resp.json()).then((result)=>{
        setCategories(result);
        console.warn(categories);
           
       })
       console.warn(categoryFilter)
       
    },[])
   
      
    return(
        <>
        <Banner title="Category" />
<section className="productPage">
    <div className="container">
       <div className="headingBox"><h1 className="dashed">Latest Product</h1></div>
       <div className="row">
           <div className="col-md-3">
               <aside>
                   <div className="box">
                       <h3>Categories</h3>
                       <ul>
                       <li onClick={() => setActive('all')} className={active == 'all' && 'active'}><Link to="/shop" onClick={()=>{
                                        setCategoryFilter('all')
                                    }}>All</Link></li>
                           {
                               categories && categories.map((v,i)=>{
                                   return(
                                    <li  onClick={() => setActive(v)} className={active == v && 'active'} key={i}><Link to="/shop" onClick={()=>{
                                        setCategoryFilter(v)
                                    }}>{v}</Link></li>
                                   )
                               })
                           }
                       </ul>
                   </div>
                   <div className="box color">
                       <h3>Color</h3>
                       <ul>
                           <li><Link to="/"><b className="black"></b> <span> Black</span></Link></li>
                           <li><Link to="/"><b data-color="Pink" className="pink"></b> <span> Pink</span></Link></li>
                           <li><Link to="/"><b className="green"></b> <span> Green</span></Link></li>
                           <li><Link to="/"><b className="yellow"></b> <span> Yellow</span></Link></li>
                           <li><Link to="/"><b className="yellow"></b> <span> Brown</span></Link></li>
                       </ul>
                   </div>
               </aside>
           </div>
           <div className="col-md-9">
               <main>
        <div className="productBox">
            <div className="flex">
        {
        data.map((item,i)=>{
            if(categoryFilter == 'all'){
        return(
            <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={data[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({data[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+data[i].id}><h4>{data[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${data[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === data[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:data[i].id,pice:data[i].price,img:data[i].image,name:data[i].title,qty:1,material:'Leather',color:'pink',category:data[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === data[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
        )
                        }
        else if(categoryFilter == 'electronics'){
            if(data[i].category == 'electronics'){
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={data[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({data[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+data[i].id}><h4>{data[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${data[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === data[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:data[i].id,pice:data[i].price,img:data[i].image,name:data[i].title,qty:1,material:'Leather',color:'pink',category:data[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === data[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }

        }else if(categoryFilter == 'jewelery'){
            if(data[i].category == 'jewelery'){
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={data[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({data[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+data[i].id}><h4>{data[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${data[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === data[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:data[i].id,pice:data[i].price,img:data[i].image,name:data[i].title,qty:1,material:'Leather',color:'pink',category:data[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === data[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }


        }else if(categoryFilter == "men's clothing"){
            if(data[i].category == "men's clothing"){
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={data[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({data[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+data[i].id}><h4>{data[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${data[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === data[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:data[i].id,pice:data[i].price,img:data[i].image,name:data[i].title,qty:1,material:'Leather',color:'pink',category:data[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === data[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }


        }else if(categoryFilter == "women's clothing"){
            if(data[i].category == "women's clothing"){
                return(
                    <div className="item" key={i}>
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               {/* <li><Link to="/"><i className="far fa-eye"></i></Link></li> */}
                           </ul>
                       </div>
                        <figure><img src={data[i].image} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul><li>({data[i].rating.rate}) <i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <Link to={'/shop/'+data[i].id}><h4>{data[i].title.substr(0,25)+'...'}</h4></Link>
                                <h6 className="price"><del>$180.00</del> <span>${data[i].price}</span></h6>
                            </div>
                            <button disabled={getdata.find(item=> item.id === data[i].id ? true : false)} onClick={
                        ()=>{ dispatch(addToCart({id:data[i].id,pice:data[i].price,img:data[i].image,name:data[i].title,qty:1,material:'Leather',color:'pink',category:data[i].category}))}
                        } className="btn w-100">
                            {
                              getdata.find(item=> item.id === data[i].id) ? 'Already in Cart !!' : 'Add to Cart'
                            }
                            </button>
                        </figcaption>
                    </div>
                </div>
                )
            }

        }
    })
        }
                
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

export default Category;
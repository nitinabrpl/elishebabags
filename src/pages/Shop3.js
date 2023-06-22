import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Banner from './Banner';
import { addToCart } from '../components/actions/cartActions'

 class Shop extends Component{
     handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        
        
        let itemList = this.props.items.map((item,i)=>{
            return(
                <div className="item">
                    <div className="box">
                       <div className="moreBox">
                           <ul>
                               <li><Link to="/"><i className="far fa-heart"></i></Link></li>
                               <li><Link to="/"><i className="far fa-eye"></i></Link></li>
                           </ul>
                       </div>
                        <figure><img src={'./assets/images/more/'+(item.img)} alt="" /></figure>
                        <figcaption>
                            <div className="innerBox">
                                <div className="rating">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <h4>{item.title}</h4>
                                <h6 className="price"><del>$180.00</del> <span>${item.price}</span></h6>
                            </div>
                            <Link to="/shop" onClick={()=>{this.handleClick(item.id)}} className="btn"><i className="fas fa-shopping-basket"></i> Add to Cart</Link>
                        </figcaption>
                    </div>
                </div>
            )
        })
        return(
            <>
            <Banner />
            <section className="productPage">
    <div className="container">
       <div className="headingBox"><h1 className="dashed">Latest Product</h1></div>
       <div className="row">
           <div className="col-md-3">
               <aside>
                   <div className="box">
                       <h3>Categories</h3>
                       <ul>
                           <li><Link to="/">Belt</Link></li>
                           <li><Link to="/">Scarfs</Link></li>
                           <li><Link to="/">Custom jewelry</Link></li>
                           <li><Link to="/">Umbrella</Link></li>
                           <li><Link to="/">Purse</Link></li>
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
                        {itemList}
                     </div>
                  </div>
               </main>
           </div>
       </div>
    </div>
</section>
            
            
            
            <div className="container d-none">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)
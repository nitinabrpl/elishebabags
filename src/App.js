import React,{useState, useEffect} from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

import HomeContainer from './containers/HomeContainer'
import ShopContainer from './containers/ShopContainer'
import ProductDetailContainer from './containers/ProductDetailContainer'
import HeaderContainer from './containers/HeaderContainer'
import CartContainer from './containers/CartContainer'
import Checkout from './pages/Checkout';
import Thankyou from './pages/Thankyou';
import Test from './pages/Test';
import Pd from './pages/Pd';
import Sh from './pages/Sh';
import Category from './pages/Category';

function App() {
    
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopContainer />} />
            <Route path="/shop/:id" element={<ProductDetailContainer />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/te/ie" exect element={<Pd />} />
            <Route path="/single/:id" element={<Sh />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

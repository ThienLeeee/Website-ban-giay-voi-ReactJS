import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import HomeProducts from "./Home/HomeProducts";
import Detail from "./Home/Detail";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Shop from "./Home/Shop";
import ProductsByCate from "./Home/ProductsByCate";
import Introduce from "./Home/Introduce";
import News from "./Home/News";
import SaleProducts from "./Home/SaleProducts";
import Contract from "./Home/Contract";
import Login from "./Home/Login";
import Register from "./Home/Register";
import Cart from "./Home/Cart";

export default function Index() {

  return (
    <>
    <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeProducts/>}/>              
          <Route path="/detail/product/:id" element={<Detail/>} />            
          <Route path='/shop' element={<Shop/>}/>                       
          <Route path='/cate/products/:categoryId' element={<ProductsByCate/>}/>                       
          <Route path='/introduce' element={<Introduce/>}/>                       
          <Route path='/news' element={<News/>}/>                       
          <Route path='/saleproducts' element={<SaleProducts/>}/>                       
          <Route path='/contract' element={<Contract/>}/>                       
          <Route path='/login' element={<Login/>}/>                       
          <Route path='/register' element={<Register/>}/>                       
          <Route path='/cart' element={<Cart/>}/>                       
        </Routes>
        <Footer/>
    </Router>
     
    </>
  )
}



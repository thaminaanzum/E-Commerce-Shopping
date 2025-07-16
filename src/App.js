import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.avif'
import women_banner from './Components/Assets/women_banner.webp'
import kids_banner from './Components/Assets/kid_banner.jpg'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
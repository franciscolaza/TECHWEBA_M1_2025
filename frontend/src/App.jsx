import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Bag from './pages/Bag';
import Produit from './pages/Produit';
import Footer from './component/footer';
import Cancel from './component/cancel';
import Success from './component/success';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  const [cart, setCart] = useState([]);
  const changeCart = (newCart) => {
    console.log(newCart);
    setCart(newCart);
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <BrowserRouter>
          <Navbar cartSize={cart.length} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bag" element={<Bag cart={cart} setCart={changeCart} />} />
            <Route path="/Produit" element={<Produit onCartChange={changeCart} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />

          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-right" />
      </div>
      <Footer />
    </div>

  );
}

export default App;

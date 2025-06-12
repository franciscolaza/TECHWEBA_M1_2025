import React from 'react';
import logo from '../assets/logo.svg'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom';
import panier from '../assets/panier.svg'
function Navbar({cartSize}) {
    console.log(cartSize)
    return (
        <nav className="sticky top-0 left-0 w-full bg-white shadow-xs z-50 md:px-80">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="w-full">
                    <img src={logo} alt="" />
                </Link>
               
               <Link to="/Bag" className='relative w-fit'>
               <span className='absolute bg-red-600 -top-2 -right-2 text-gray-50 px-2 rounded-full'>{cartSize}</span>
                  
                <button className='border border-black font-bold w-30 rounded-lg p-1 flex gap-1' ><img src={panier} alt="" />View Cart</button>
                </Link>
               
               
            </div>
        </nav>
    );
}

export default Navbar;

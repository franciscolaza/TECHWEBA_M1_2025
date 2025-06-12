import React, { useState } from 'react';
import axios from 'axios';
import { BounceStagger } from '../component/RevealOnScroll';
import { loadStripe } from '@stripe/stripe-js';


function Bag({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);
  if (cart.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold mb-6'>Your cart is empty</h1>
        <button
          className='bg-black text-white px-4 py-2 rounded-lg font-bold'
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    setCart(newCart);
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/produit/create-checkout-session', {
        cart, // ta variable useState
      });

      window.location.href = response.data.url; // redirection vers Stripe
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
    }
  };

  // Assurez-vous de remplacer 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX' par votre clé publique Stripe
  const stripePromise = loadStripe('pk_test_51RYqbeP682WjoRVV7ZhxxSLeu0VIwrsngIgNzaDP9vYxOU1qu1RIOKafzYLlF9IFZguYGo9JYy80mVmU9dMNMAsq00q2oz83cr'); // ta clé publique


  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 20 : 0;
  const tax = subtotal * 0.0667;
  const discount = subtotal > 100 ? 6 : 0;
  const total = subtotal + shipping + tax - discount;

  return (
    <>
      <div className='p-10 mt-15 md:px-80 md:flex md:justify-between md:flex-row-reverse'>
        {/* Résumé panier */}
        <div className='md:py-4 rounded-lg shadow-[0_0_25px_-20px_rgba(0,0,0,1)] flex flex-col md:w-100 md:h-100 md:justify-center md:gap-4'>
          <div className='p-4 flex flex-col gap-4'>
            <BounceStagger>
              <h1 className='font-bold text-4xl'>Summary</h1>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold'>Subtotal</h1>
                <h1 className='font-bold'>${subtotal.toFixed(2)}</h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold'>Shipping and Delivery</h1>
                <h1 className='font-bold'>${shipping.toFixed(2)}</h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold'>Tax</h1>
                <h1 className='font-bold'>${tax.toFixed(2)}</h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold'>Discount</h1>
                <h1 className='font-bold text-red-600'>-${discount.toFixed(2)}</h1>
              </div>
            </BounceStagger>
          </div>
          <hr className='text-gray-500' />
          <div className='flex justify-between items-center'>
            <h1 className='font-bold p-4'>TOTAL</h1>
            <h1 className='font-bold p-4'>${total.toFixed(2)}</h1>
          </div>
          <div className='flex justify-between items-center w-full p-2'>
            <button
              className='bg-black text-white px-4 py-2 rounded-lg w-full font-bold items-center'
              onClick={handleCheckout}
            >
              Checkout <i className='mdi mdi-arrow-right'></i>
            </button>

          </div>
        </div>

        {/* Liste des articles */}
        <div className='p-4'>
          <h1 className='font-bold text-4xl'>Your Bag</h1>
          {cart.map((item, index) => (
            <div key={index}>
              <div className='flex gap-10 p-4'>
                <div className='w-30 py-2'>
                  <img src={item.image} alt="" className='w-24 h-24 object-cover' />
                </div>
                <div className='flex flex-col gap-4 md:justify-between'>
                  <div className='flex justify-between items-center'>
                    <BounceStagger>
                      <h1 className='font-bold'>{item.name}</h1>
                      <p className='font-bold'>${item.price}</p>
                    </BounceStagger>
                  </div>
                  <div className='flex border w-30 border-gray-500 rounded-lg p-2 justify-between items-center'>
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityChange(index, +1)}>+</button>
                  </div>
                  <BounceStagger>
                    <button
                      onClick={() => handleRemove(index)}
                      className='text-gray-500 rounded-lg underline font-bold'
                    >
                      Remove
                    </button>
                  </BounceStagger>
                </div>
              </div>
              <hr className='text-gray-300 p-4' />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Bag;

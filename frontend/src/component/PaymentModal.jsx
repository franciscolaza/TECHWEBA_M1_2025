import React from 'react';
import { motion } from 'framer-motion';

function PaymentModal({ total, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Appelle la logique de paiement
  };

  return (
    <div className='fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-end md:items-center z-50'>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className='bg-white p-8 rounded-t-2xl md:rounded-xl shadow-lg w-full md:w-[400px] relative'
      >
        <button onClick={onClose} className='absolute top-2 right-3 text-gray-500 font-bold text-xl'>&times;</button>
        <h2 className='text-xl font-bold mb-4'>Payment Information</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" placeholder="Full Name" required className='border p-2 rounded' />
          <input type="text" placeholder="Card Number" required className='border p-2 rounded' />
          <input type="text" placeholder="Expiry Date (MM/YY)" required className='border p-2 rounded' />
          <input type="text" placeholder="CVV" required className='border p-2 rounded' />
          <input type="text" placeholder="Billing Address" required className='border p-2 rounded' />
          <button type="submit" className='bg-black text-white py-2 rounded font-bold hover:bg-gray-800 transition'>
            Pay ${total.toFixed(2)}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default PaymentModal;


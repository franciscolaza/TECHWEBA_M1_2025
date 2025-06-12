import React from 'react';
import { Link } from 'react-router-dom';

function Cancel() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Paiement annulé</h1>
      <p className="mb-4 text-gray-700">Le paiement a été annulé. Vous pouvez réessayer si vous le souhaitez.</p>
      <Link to="/Bag" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Retour au panier
      </Link>
    </div>
  );
}

export default Cancel;

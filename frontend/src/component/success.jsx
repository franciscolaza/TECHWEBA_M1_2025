import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Paiement réussi !</h1>
      <p className="mb-4 text-gray-700">Merci pour votre achat. Votre commande a été confirmée.</p>
      <Link to="/" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Success;

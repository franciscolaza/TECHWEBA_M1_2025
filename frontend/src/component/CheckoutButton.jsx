import React from 'react';

const CheckoutButton = () => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              name: "Chaussure Air Max",
              price: 12000, // en centimes => 120 €
              quantity: 1,
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirection vers Stripe Checkout
      } else {
        alert("Erreur de création de session");
      }
    } catch (err) {
      console.error("Erreur Stripe:", err);
    }
  };

  return <button onClick={handleCheckout}>Payer avec Stripe</button>;
};

export default CheckoutButton;

const express = require('express');
const router = express.Router();
const connection = require('../db')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * @swagger
 * tags:
 *   name: Produit
 *   description: Gestion des produits
 */

/**
 * @swagger
 * /produit:
 *   get:
 *     summary: Récupérer tous les produits
 *     tags: [Produit]
 *     responses:
 *       200:
 *         description: Liste des produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nom:
 *                     type: string
 *                     example: "Chaussure Running"
 *                   prix:
 *                     type: number
 *                     example: 49.99
 *                   image_url:
 *                     type: string
 *                     example: "/uploads/images/image2.png"
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => {
    connection.query('SELECT * FROM produit', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

/**
 * @swagger
 * /produit/{id}:
 *   get:
 *     summary: Récupérer un produit par son ID
 *     tags: [Produit]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit
 *     responses:
 *       200:
 *         description: Détails du produit
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nom:
 *                   type: string
 *                   example: "Chaussure Running"
 *                 prix:
 *                   type: number
 *                   example: 49.99
 *                 image_url:
 *                   type: string
 *                   example: "/uploads/images/image2.png"
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/', (req, res) => {
    connection.query('SELECT*FROM produit', (err, result) => {
        if (err) {
            res.send("une erreur a ete recontrer")

        }
        else {
            console.log(result)
            res.send(result)
        }


    })
})

router.post('/create-checkout-session', async (req, res) => {
    const { cart } = req.body;
    console.log('Panier reçu:', cart);

    try {
        const line_items = cart.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    images: [item.image], // doit être une URL absolue !
                },
                unit_amount: item.price * 100, // en centimes
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error('Erreur de paiement Stripe :', err);
        res.status(500).json({ error: 'Erreur de paiement' });
    }
});

module.exports = router;
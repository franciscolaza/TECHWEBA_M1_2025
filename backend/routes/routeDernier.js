const express = require('express');
const router = express.Router();
const connection = require('../db')
/**
 * @swagger
 * /dernier-id:
 *   get:
 *     summary: Récupère les derniers produits ajoutés
 *     tags:
 *       - Produit
 *     responses:
 *       200:
 *         description: Liste des produits triés par id décroissant
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 5
 *                   nom:
 *                     type: string
 *                     example: "Chaussure X"
 *                   image_url:
 *                     type: string
 *                     example: "/uploads/images/image2.png"
 *       404:
 *         description: Aucun produit trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get('/dernier-id', (req, res) => {
  connection.query(
    `SELECT * FROM produit ORDER BY id DESC LIMIT 4`,
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: 'Aucun produit trouvé' });
      res.json(row);
    }
  );
});



module.exports = router;
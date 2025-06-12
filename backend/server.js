const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../backend/Swagger/swaggerConfig');  // import ici

const app = express();
app.use(cors());
app.use(express.json());

// routes
const produitRoutes = require('./routes/produitRoute');
const routeDernier = require('./routes/routeDernier');

app.use('/api/produit', produitRoutes);
app.use('/api/dernier', routeDernier);
app.use('/api/uploads', express.static('uploads'));

// swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs on http://localhost:${PORT}/api-docs`);
});

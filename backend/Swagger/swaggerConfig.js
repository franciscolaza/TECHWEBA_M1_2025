// swagger/swaggerConfig.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Vente Chaussures',
      version: '1.0.0',
      description: 'Documentation de l’API',
    },
    servers: [
      {
        url: 'http://localhost:8081',
      },
    ],
  },
  apis: ['./routes/*.js'],  // chemins vers tes fichiers de routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

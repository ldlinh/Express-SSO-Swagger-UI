const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
      info: {
        swagger: '2.0',
        title: "Teaser API",
        version: "1.0.0",
        description: "Description about Teaser API"
      },
      host: '192.168.10.9:3000',
      basePath:'/',
      securityDefinitions: {
        bearerAuth: {
           type: 'apiKey',
           name: 'Authorization',
           scheme: 'bearer',
           bearerFormat: 'JWT',
           in: 'header',
        },
      },
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['endpoints.js'],
  };
const specs = swaggerJsdoc(options);
module.exports = (app) => {
    app.use('/',swaggerUi.serve,swaggerUi.setup(specs));
}
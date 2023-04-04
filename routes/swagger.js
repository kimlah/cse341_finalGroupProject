const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const auth0 = require ('@auth0/nextjs-auth0').withApiAuthRequired;
const getSession = require ('@auth0/nextjs-auth0').getSession;


router.get('/api-docs') 
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
    
module.exports = router;
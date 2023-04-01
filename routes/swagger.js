const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const auth0 = require ('@auth0/nextjs-auth0').withApiAuthRequired;
const getSession = require ('@auth0/nextjs-auth0').getSession;




export default auth0 ( function
SecretRoute (res, res) {
    const session = getSession(req,res)
    const user = session.user

    router.use('/api-docs', swaggerUi.serve);
    router.get('/api-docs', swaggerUi.setup(swaggerDocument));
    
    module.exports = router;

})


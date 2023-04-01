const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired ( function
SecretRoute (res, res) {
    const session = getSession(req,res)
    const user = session.user

    router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;

})




const express = require('express');
const router = express.Router();
const {requiresAuth} = require('express-openid-connect');


router.use('/', require('./swagger'));
router.use('/admin', require('./admin'));
router.use('/employee', require('./employee'));
router.use('/equipment', require('./equipment'));
router.use('/workorder', require('./workorders'));

router.get('/', requiresAuth, require('./swagger'));

module.exports = router;

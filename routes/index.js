const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/admin', require('./admin'));
router.use('/employee', require('./employee'));
router.use('/equipment', require('./equipment'));
router.use('/workorder', require('./workorders'));

module.exports = router;

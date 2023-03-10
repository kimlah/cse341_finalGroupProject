const express = require('express');
const router = express.Router();

const validator = require('../validate');

const adminController = require('../controller/admin');

// #swagger.tags = ['Administrator']
router.post('/', validator.validatedAdmin, adminController.createUser);

// #swagger.tags = ['Administrator']
router.get('/', adminController.getAll);

// #swagger.tags = ['Administrator']
router.get('/:id', adminController.getSingle);

// #swagger.tags = ['Administrator']
router.put('/:id', validator.validatedAdmin, adminController.updateUser);

// #swagger.tags = ['Administrator']
router.delete('/:id', adminController.deleteUser);


module.exports = router;
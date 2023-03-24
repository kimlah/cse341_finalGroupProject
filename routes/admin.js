const express = require('express');
const router = express.Router();

const validator = require('../validate');

const adminController = require('../controller/admin');

router.post('/', validator.validatedAdmin, adminController.createUser);

router.get('/', adminController.getAll);

router.get('/:id', adminController.getSingle);

router.put('/:id', validator.validatedAdmin, adminController.updateUser);

router.delete('/:id', adminController.deleteUser);

module.exports = router;

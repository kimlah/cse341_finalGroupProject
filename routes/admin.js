const express = require('express');
const router = express.Router();

const validator = require('../validate');

const adminController = require('../controller/admin');

router.get('/', adminController.getAll);

router.get('/:id', adminController.getSingle);

router.post('/', validator.validatedTask, adminController.createUser);

router.put('/:id', validator.validatedTask, adminController.updateUser);

router.delete('/:id', adminController.deleteUser);


module.exports = router;
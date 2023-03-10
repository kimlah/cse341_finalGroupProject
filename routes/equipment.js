const express = require('express');
const router = express.Router();

const validator = require('../validate');

const equipmentController = require('../controller/equipment');

// #swagger.tags = ['Equipment']
router.post('/', validator.validatedEquipment, equipmentController.createEquipment);

// #swagger.tags = ['Equipment']
router.get('/', equipmentController.getAll);

// #swagger.tags = ['Equipment']
router.get('/:id', equipmentController.getSingle);

// #swagger.tags = ['Equipment']
router.put('/:id', validator.validatedEquipment, equipmentController.updateEquipment);

// #swagger.tags = ['Equipment']
router.delete('/:id', equipmentController.deleteEquipment);


module.exports = router;
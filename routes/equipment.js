const express = require('express');
const router = express.Router();

const validator = require('../validate');

const equipmentController = require('../controller/equipment');

router.get('/', equipmentController.getAll);

router.get('/:id', equipmentController.getSingle);

router.post('/', validator.validatedTask, equipmentController.createEquipment);

router.put('/:id', validator.validatedTask, equipmentController.updateEquipment);

router.delete('/:id', equipmentController.deleteEquipment);


module.exports = router;
const express = require('express');
const router = express.Router();

const validator = require('../validate');

const equipmentController = require('../controller/equipment');


router.post('/', validator.validatedEquipment, equipmentController.createEquipment);

router.get('/', equipmentController.getAll);

router.get('/:id', equipmentController.getSingle);

router.put('/:id', validator.validatedEquipment, equipmentController.updateEquipment);

router.delete('/:id', equipmentController.deleteEquipment);


module.exports = router;
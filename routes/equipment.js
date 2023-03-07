const express = require('express');
const router = express.Router();

const validator = require('../validate');

const equipmentController = require('../controller/equipment');

router.get('/', equipmentController.getAll);

router.get('/:id', equipmentController.getSingle);

router.post('/', validator.validatedEquipment, todosController.createToDo);

router.put('/:id', validator.validatedEquipment, todosController.updateToDo);

router.delete('/:id', equipmentController.deleteEquipment);


module.exports = router;
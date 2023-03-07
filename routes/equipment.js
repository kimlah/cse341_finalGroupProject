const express = require('express');
const router = express.Router();

const validator = require('../validate');

const todosController = require('../controller/equipment');

router.get('/', todosController.getAll);

router.get('/:id', todosController.getSingle);

router.post('/', validator.validatedEquipment, todosController.createToDo);

router.put('/:id', validator.validatedEquipment, todosController.updateToDo);

router.delete('/:id', todosController.deleteToDo);


module.exports = router;
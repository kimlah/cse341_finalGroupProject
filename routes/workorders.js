const express = require('express');
const router = express.Router();

const validator = require('../validate');

const todosController = require('../controller/workorders');

router.get('/', todosController.getAll);

router.get('/:id', todosController.getSingle);

router.post('/', validator.validatedWorkOrder, todosController.createToDo);

router.put('/:id', validator.validatedWorkOrder, todosController.updateToDo);

router.delete('/:id', todosController.deleteToDo);


module.exports = router;
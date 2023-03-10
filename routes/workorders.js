const express = require('express');
const router = express.Router();

const validator = require('../validate');

const workOrderController = require('../controller/workorders');


router.post('/', validator.validatedWorkOrder, workOrderController.createToDo);

router.get('/', workOrderController.getAll);

router.get('/:id', workOrderController.getSingle);

router.put('/:id', validator.validatedWorkOrder, workOrderController.updateToDo);

router.delete('/:id', workOrderController.deleteToDo);


module.exports = router;
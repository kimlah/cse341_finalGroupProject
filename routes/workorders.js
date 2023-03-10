const express = require('express');
const router = express.Router();

const validator = require('../validate');

const workOrderController = require('../controller/workorders');

// #swagger.tags = ['Work Orders']
router.post('/', validator.validatedWorkOrder, workOrderController.createToDo);

// #swagger.tags = ['Work Orders']
router.get('/', workOrderController.getAll);

// #swagger.tags = ['Work Orders']
router.get('/:id', workOrderController.getSingle);

// #swagger.tags = ['Work Orders']
router.put('/:id', validator.validatedWorkOrder, workOrderController.updateToDo);

// #swagger.tags = ['Work Orders']
router.delete('/:id', workOrderController.deleteToDo);


module.exports = router;
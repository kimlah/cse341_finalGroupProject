const express = require('express');
const router = express.Router();

const validator = require('../validate');

const workOrderController = require('../controller/workorders');


router.post('/', validator.validatedWorkOrder, workOrderController.createWorkOrder);

router.get('/', workOrderController.getAll);

router.get('/:id', workOrderController.getSingle);

router.put('/:id', validator.validatedWorkOrder, workOrderController.updateWorkOrder);

router.delete('/:id', workOrderController.deleteWorkOrder);


module.exports = router;
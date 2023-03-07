const express = require('express');
const router = express.Router();

const validator = require('../validate');

const employeeController = require('../controller/employee');

router.get('/', employeeController.getAll);

router.get('/:id', employeeController.getSingle);

router.post('/', validator.validatedTask, employeeController.employee);

router.put('/:id', validator.validatedTask, employeeController.updateE);

router.delete('/:id', employeeController.deleteE);


module.exports = router;
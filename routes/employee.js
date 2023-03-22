const express = require('express');
const router = express.Router();

const validator = require('../validate');

const employeeController = require('../controller/employee');

router.post('/', validator.validatedEmployee, employeeController.employee);

router.get('/', employeeController.getAll);

router.get('/:id', employeeController.getSingle);

router.put('/:id', validator.validatedEmployee, employeeController.updateE);

router.delete('/:id', employeeController.deleteE);

module.exports = router;

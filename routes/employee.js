const express = require('express');
const router = express.Router();

const validator = require('../validate');

const employeeController = require('../controller/employee');
// #swagger.tags = ['Employee']
router.post('/', validator.validatedEmployee, employeeController.employee);

// #swagger.tags = ['Employee']
router.get('/', employeeController.getAll);

// #swagger.tags = ['Employee']
router.get('/:id', employeeController.getSingle);

// #swagger.tags = ['Employee']
router.put('/:id', validator.validatedEmployee, employeeController.updateE);

// #swagger.tags = ['Employee']
router.delete('/:id', employeeController.deleteE);


module.exports = router;
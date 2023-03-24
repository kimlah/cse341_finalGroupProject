const validator = require('./helper/validate.js');
const validatedAdmin = async (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    birthday: 'required|string',
    department: 'required|string',
    hireDate: 'required|string',
    level: 'required|string',
    projectsAssigned: 'string'
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

const validatedEmployee = async (req, res, next) => {
  const validationRule = {
    firstName: 'string',
    lastName: 'string',
    level: 'required|string',
    projectsAssigned: 'string'
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

const validatedEquipment = async (req, res, next) => {
  const validationRule = {
    equipmentName: 'required|string',
    datePurchased: 'string',
    maintenance: 'string',
    available: 'required|string',
    pastWorkOrders: 'string',
    location: 'required|string',
    notes: 'string'
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

const validatedWorkOrder = async (req, res, next) => {
  const loc = {
    Street: 'required|string',
    City: 'required|string',
    State: 'required|string',
    zipCode: 'required|integer'
  };

  const cont = {
    name: 'required|string',
    phoneNumber: 'required|phonenumber',
    email: 'required|email'
  };

  const task = {
    instructions: 'required|string',
    equipment: 'required|string'
  };

  const note = {
    date: 'date',
    note: 'string',
    photo: 'string'
  };

  const photos = {
    preworkPhoto: 'string',
    postworkPhoto: 'string'
  };

  const conts = [cont];
  const tasks = [task];
  const notes = [note];

  const validationRule = {
    todaysDate: 'required|date',
    appointmentDate: 'required|date',
    dueDate: 'date',
    completeDate: 'date',
    location: loc,
    contacts: 'array',
    tasks: 'array',
    notes: 'array',
    orderPhotos: photos
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = {
  validatedAdmin,
  validatedEmployee,
  validatedEquipment,
  validatedWorkOrder
};

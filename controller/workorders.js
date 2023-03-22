const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  // #swagger.tags = ['Work Orders']
  // #swagger.description = "This reads all the data in workorders"
  const result = await mongodb.getDb().db('workOrderProject').collection('workOrders').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  // #swagger.tags = ['Work Orders']
  // #swagger.description = "This reads the data in workorder of requested id"
  if (ObjectId.isValid(req.id)) {
    return res.status(400).send('Invalid object id');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('workOrders')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createWorkOrder = async (req, res, next) => {
  // #swagger.tags = ['Work Orders']
  // #swagger.description = "This creates a new workorder"
  if (ObjectId.isValid(req.id)) {
    return res.status(400).send('Invalid object id');
  }
  const WO = {
    todaysDate: req.body.todaysDate,
    appointmentDate: req.body.appointmentDate,
    dueDate: req.body.dueDate,
    completeDate: req.body.completeDate,
    location: req.body.location,
    contacts: req.body.contacts,
    tasks: req.body.tasks,
    notes: req.body.notes,
    orderPhotos: req.body.orderPhotos
  };
  try {
    const response = await mongodb
      .getDb()
      .db('workOrderProject')
      .collection('workOrders')
      .insertOne(WO);
    if (response.acknowledged) {
      res.status(201).json(response);
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: response.error || 'Some error occurred while creating the workorder.'
    });
  }
};

const updateWorkOrder = async (req, res, next) => {
  // #swagger.tags = ['Work Orders']
  // #swagger.description = "This updates a workorder with an existing id"
  if (ObjectId.isValid(req.id)) {
    return res.status(400).send('Invalid object id');
  }
  const userId = new ObjectId(req.params.id);
  const WO = {
    todaysDate: req.body.todaysDate,
    appointmentDate: req.body.appointmentDate,
    dueDate: req.body.dueDate,
    completeDate: req.body.completeDate,
    location: req.body.location,
    contacts: req.body.contacts,
    tasks: req.body.tasks,
    notes: req.body.notes,
    orderPhotos: req.body.orderPhotos
  };
  try {
    const response = await mongodb
      .getDb()
      .db('workOrderProject')
      .collection('workOrders')
      .replaceOne({ _id: userId }, WO);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: response.error || 'Some error occurred while updating the workorder.'
    });
  }
};

const deleteWorkOrder = async (req, res, next) => {
  // #swagger.tags = ['Work Orders']
  // #swagger.description = "This deletes a workorder with an existing id"
  if (ObjectId.isValid(req.id)) {
    return res.status(400).send('Invalid object id');
  }
  const userId = new ObjectId(req.params.id);
  try {
    const response = await mongodb
      .getDb()
      .db('workOrderProject')
      .collection('workOrders')
      .remove({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: response.error || 'Some error occurred while deleting the workorder.'
    });
  }
};

module.exports = { getAll, getSingle, createWorkOrder, updateWorkOrder, deleteWorkOrder };

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('workOrderProject')
  .collection('workOrders')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
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

const createToDo = async (req,res,next) => {
  const todo = {
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
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('workOrders')
    .insertOne(todo);
    if (response.acknowledged) {
      res.status(201).json(response);
    }
  }catch (error) {
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while creating the todo.')
      })
  }
};

const updateToDo = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const todo = {
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
   try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('workOrders')
    .replaceOne({ _id: userId }, todo);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } 
   } catch (error){
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while updating the todo.')
      })
    }
};

const deleteToDo = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('workOrders')
    .remove({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send(); 
    }
  }catch (error){
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while deleting the contact.')
      })
    }
};



module.exports = {getAll, getSingle, createToDo, updateToDo, deleteToDo};
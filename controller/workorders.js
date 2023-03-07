const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('workOrderProject')
  .collection('wordOrders')
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
    .collection('wordOrders')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createToDo = async (req,res,next) => {
  const todo = {
    todaysDate: req.body.todaysDate,
    task: req.body.task,
    dueDate: req.body.dueDate,
    class: req.body.class,
    appointment: req.body.appointment,
    activities: req.body.activities,
    notes: req.body.notes
  };
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('wordOrders')
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
    task: req.body.task,
    dueDate: req.body.dueDate,
    class: req.body.class,
    appointment: req.body.appointment,
    activities: req.body.activities,
    notes: req.body.notes
    };
   try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('wordOrders')
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
    .collection('wordOrders')
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
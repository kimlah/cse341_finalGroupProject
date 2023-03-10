const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('workOrderProject')
  .collection('employees')
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
    .collection('employees')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const employee = async (req,res,next) => {
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    level: req.body.level,
    projectAssigned: req.body.projectAssigned
  };
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('employees')
    .insertOne(employee);
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

const updateE = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const update = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    level: req.body.level,
    projectAssigned: req.body.projectAssigned
    };
   try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('employees')
    .replaceOne({ _id: userId }, update);
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

const deleteE = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('employees')
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



module.exports = {getAll, getSingle, employee, updateE, deleteE};
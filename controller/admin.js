const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('workOrderProject')
  .collection('admins')
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
    .collection('admins')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createUser = async (req,res,next) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    department: req.body.department,
    hireDate: req.body.hireDate,
    level: req.body.level,
    projectsAssigned: req.body.projectsAssigned
  };
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('admins')
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

const updateUser = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
<<<<<<< HEAD
<<<<<<< HEAD
    lastName: req.body.lastName,
=======
=======
>>>>>>> 79b421f3f70d4939aa8004529d706fffc5ae8297
    LastName: req.body.LastName,
>>>>>>> 79bdf0a (updated validator.js)
    birthday: req.body.birthday,
    department: req.body.department,
    hireDate: req.body.hireDate,
    level: req.body.level,
    projectsAssigned: req.body.projectsAssigned
  };
   try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('admins')
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

const deleteUser = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('admins')
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



module.exports = {getAll, getSingle, createUser, updateUser, deleteUser};
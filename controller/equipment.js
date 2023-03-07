const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('workOrderProject')
  .collection('equipment')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const equipmentId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('equipment')
    .find({ _id: equipmentId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createEquipment = async (req,res,next) => {
  const equipment = {
    equipmentName: req.body.equipmentName,
    datePurchased: req.body.datePurchased,
    maintenance: req.body.maintenance,
    available: req.body.available,
    pastWorkOrders: req.body.pastWorkOrders,
    location: req.body.location,
    notes: req.body.notes
  };
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('equipment')
    .insertOne(equipment);
    if (response.acknowledged) {
      res.status(201).json(response);
    }
  }catch (error) {
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while creating the equipment.')
      })
  }
};

const updateEquipment = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const equipmentId = new ObjectId(req.params.id);
  const equipment = {
    equipmentName: req.body.equipmentName,
    datePurchased: req.body.datePurchased,
    maintenance: req.body.maintenance,
    available: req.body.available,
    pastWorkOrders: req.body.pastWorkOrders,
    location: req.body.location,
    notes: req.body.notes
  };
   try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('equipment')
    .replaceOne({ _id: equipmentId }, equipment);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } 
   } catch (error){
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while updating the equipment.')
      })
    }
};

const deleteEquipment = async (req,res,next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const equipmentId = new ObjectId(req.params.id);
  try{
    const response = await mongodb
    .getDb()
    .db('workOrderProject')
    .collection('equipment')
    .remove({ _id: equipmentId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send(); 
    }
  }catch (error){
    return res.status(500).json({
      success: false,
      message: (response.error || 'Some error occurred while deleting the equipment.')
      })
    }
};



module.exports = {getAll, getSingle, createEquipment, updateEquipment, deleteEquipment};
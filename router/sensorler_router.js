const express =require("express");
const sensorController =require('../controller/sensorler_controller');
const sensorler_controller = express.Router()

sensorler_controller.get('/sensorEkle/:id',sensorController.getAll);
sensorler_controller.get('/sensorEkle/:id',sensorController.getById);
sensorler_controller.post('/sensorEkle/:id', sensorController.getCreate);



module.exports=sensorler_controller;

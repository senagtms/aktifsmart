const express =require("express");
const sensorController =require('../controller/sensorler_controller');
const sensorler_controller = express.Router()

sensorler_controller.get('/sensorEkle',sensorController.getAll);
sensorler_controller.get('/sensorEkle',sensorController.getById);
sensorler_controller.post('/sensorEkle', sensorController.getCreate);
sensorler_controller.get('/:id',sensorController.getCihazdetay)
// sensorler_controller.get('/cihazlar/:id',sensorController.getCihazdetay)
sensorler_controller.post('/sensorUpdate', sensorController.sensorUpdate);
// sensorler_controller.get('/sensordetay/sensorEkle',sensorController.sensorEkle);
// sensorler_controller.get('/sensordetay/alarm',sensorController.alarm)

module.exports=sensorler_controller;

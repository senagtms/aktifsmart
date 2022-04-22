const express =require("express");
const sensorController =require('../controller/sensorler_controller');
const sensorler_controller = express.Router()

sensorler_controller.get('/sensorEkle/:id',sensorController.getAll);
sensorler_controller.get('/sensorEkle/:id',sensorController.getById);
sensorler_controller.post('/sensorEkle/:id', sensorController.getCreate);


sensorler_controller.get('/cihazdetay/alarm/:id',sensorController.alarmGetAll);
sensorler_controller.get('/cihazdetay/nem/:id',sensorController.nemGetAll);
sensorler_controller.get('/cihazdetay/sicaklik/:id',sensorController.sicaklikGetAll);
sensorler_controller.get('/cihazdetay/yaniciGaz/:id',sensorController.yaniciGazGetAll);
sensorler_controller.get('/cihazdetay/siren/:id',sensorController.sirenGetAll);
sensorler_controller.get('/cihazdetay/gaz/:id',sensorController.gazGetAll);
sensorler_controller.get('/cihazdetay/suBaskini/:id',sensorController.suBaskiniGetAll);


module.exports=sensorler_controller;

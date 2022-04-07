const express =require("express");
const cihazController =require('../controller/cihazlar_controller');

const cihazlar_controller = express.Router()

cihazlar_controller.get('/',cihazController.getAll);
cihazlar_controller.get('/cihazEkle', cihazController.ekleForm); 
cihazlar_controller.post('/cihazEkle', cihazController.getCreate);
// cihazlar_controller.get('/:id',cihazController.getCihazdetay)

module.exports=cihazlar_controller;
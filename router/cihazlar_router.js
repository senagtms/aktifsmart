const express =require("express");
const cihazController =require('../controller/cihazlar_controller');

const cihazlar_controller = express.Router()

cihazlar_router.get('/',cihazController.getAll);
cihazlar_router.get('/cihazEkle', cihazController.ekleForm); 
cihazlar_router.post('/cihazEkle', cihazController.getCreate);
cihazlar_router.get('/cihazdetay/:id',cihazController.getCihazdetay);
cihazlar_router.get('/:id',cihazController.delete);


module.exports=cihazlar_controller;

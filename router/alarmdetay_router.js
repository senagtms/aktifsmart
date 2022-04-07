const express =require("express");
const AlarmDetayController =require('../controller/alarmdetay_controller');

const alarmdetay_router = express.Router();
alarmdetay_router.get('/', AlarmDetayController.alarmdetay);


module.exports=alarmdetay_router;

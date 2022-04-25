const express =require("express");
const hesapAyarlariController =require('../controller/hesapAyarlari_controller');

const hesapAyarlari_router = express.Router();
hesapAyarlari_router.get('/', hesapAyarlariController.hesapAyarlari);


module.exports=hesapAyarlari_router;

const express =require("express");
const KullaniciController =require('../controller/kullanici_controller');

const kullanici_router = express.Router();
kullanici_router.get('/', KullaniciController.getAll);
kullanici_router.get('/kullaniciEkle', KullaniciController.addForm); 
kullanici_router.post('/kullaniciEkle', KullaniciController.getCreate);
kullanici_router.get('/kullaniciDuzenle/:id', KullaniciController.getById);
kullanici_router.post('/kullaniciDuzenle/:id', KullaniciController.getUpdate);





module.exports=kullanici_router;


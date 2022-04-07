const Kullanici_model = require('../models/kullanici_model');

module.exports.getAll = function (req, res,next) {

    Kullanici_model.findAll(function (err, kullanici_model) {
      if (err) {throw err;}
       else {res.render('kullanicilar', {data: kullanici_model});}
      });
  };

  module.exports.getById= (req, res)=> {
  
  var kullanici_model= Kullanici_model.findById(req.params.id);
  res.render('kullaniciDuzenle',{data : kullanici_model});
  }

  module.exports.addForm= (req, res)=> {
    res.render('kullaniciEkle');
}

  // Kullacını oluştur ve kaydet

   module.exports.getCreate = (req, res) => {
       
        // Validate request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
      
   
        const yeniKullanici = new Kullanici_model({
            kullaniciAdi: req.body.kullaniciAdi,
            kullaniciSoyadi: req.body.kullaniciSoyadi,
            kullaniciMail: req.body.kullaniciMail,
            kullaniciSifre: req.body.kullaniciSifre,
            kullaniciTel: req.body.kullaniciTel,
            kullaniciFirma: req.body.kullaniciFirma,
            kullaniciDurumu: req.body.kullaniciDurumu,
            kullaniciPozisyon: req.body.kullaniciPozisyon,
      
        });
      
       
        Kullanici_model.create(yeniKullanici, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating"
            });
          else { 
            res.render('kullaniciEkle', { alert: 'User added successfully.' });
                }
        
        });
      };


  

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

  module.exports.getUpdate= (req, res)=> {
     // Validate request
     if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Tutorial
    const guncelle = new Kullanici_model({
        kullaniciAdi: req.body.kullaniciAdi,
        kullaniciSoyadi: req.body.kullaniciSoyadi,
        kullaniciMail: req.body.kullaniciMail,
        kullaniciSifre: req.body.kullaniciSifre,
        kullaniciTel: req.body.kullaniciTel,
        kullaniciFirma: req.body.kullaniciFirma,
        kullaniciDurumu: req.body.kullaniciDurumu,
        kullaniciPozisyon: req.body.kullaniciPozisyon,
  
    });
 
    // Kullanici_model.updateById( req.params.id,req.body.kullaniciAdi,req.body.kullaniciSoyadi,req.body.kullaniciMail,req.body.kullaniciSifre,req.body.kullaniciTel,req.body.kullaniciFirma,req.body.kullaniciDurumu,req.body.kullaniciPozisyon,function(err,result){
    //         if (err) throw err;
            
    //         //res.render('edit_doctor.ejs',{list:result});
    //         res.render('kullaniciDuzenle',{data : result? result:[]});
         
        
            
    //     });


   
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
      
        // Create a Tutorial
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
      
        // Save Tutorial in the database
        Kullanici_model.create(yeniKullanici, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          else { 
            res.render('kullaniciEkle', { alert: 'User added successfully.' });
                }
        
        });
      };


  
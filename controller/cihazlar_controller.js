const cihazlarModel = require('../models/cihazlar_model');
//Cihaz Listele
module.exports.listele = function (req, res,next) {

    cihazlarModel.veriListele(function (err, cihazlar_model) {
      if (err) {throw err;}
       else {res.render('cihazlar', {data: cihazlar_model});}
      });
  };

  // Cihaz oluştur ve kaydet
  module.exports.ekleForm= (req, res)=> {
    res.render('cihazEkle');
}
   module.exports.cihazEkle = (req, res) => {
       
        
        if (!req.body) {
          res.status(400).send({
            message: "Boş geçilemez!"
          });
        }
      
        //  Cihaz oluştur
        const yenicihaz = new cihazlarModel({
            cihazAdi: req.body.cihazAdi,
            cihazSeriNo: req.body.cihazSeriNo,
            cihazMac: req.body.cihazMac,
            cihazDomain: req.body.cihazDomain,
            cihazKodu: req.body.cihazKodu,
            cihazAdresi: req.body.cihazAdresi,
            cihazDurumu: req.body.cihazDurumu,
      
        });
      
        // Database kaydet
        cihazlarModel.olustur(yenicihaz, (err) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating"
            });
          else { 
            res.render('cihazEkle', { alert: 'successfully' });
                }
        
        });
      };

//Cihaz Detayı
  module.exports.cihazDetayGit= (req, res)=> {  
        cihazlarModel.cihazDetay(req.params.id, (err, result) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.redirect('/cihazlar/cihazdetay');
                } else {
                    res.redirect('/cihazlar/cihazdetay');
                }
            } else {
                console.log(result)
                res.render('cihazdetay', {data: result});
            }
        }); }
        
//Cihaz Silme
  module.exports.sil = function(req, res) {
        cihazlarModel.cihazSil( req.params.id, function(err) {
          if (err)
          res.send(err);
          res.redirect('/cihazlar');
        });
      };


/***************** Cihaza ait kullanıcılar bölümü *********************/


//Cihaza ait kullanıcılar

module.exports.cihazKullanici= (req, res)=> {  
  cihazlarModel.cihazKullanicilar(req.params.id, (err, result) => {
    if (err) res.status(err);
    // res.json(result);
    res.render("./kullaniciCihaz/kullanicilarCihaz", {data : result});
    
  });
}
  

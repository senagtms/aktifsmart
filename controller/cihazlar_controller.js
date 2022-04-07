const cihazlarModel = require('../models/cihazlar_model');

// module.exports.getCihazdetay= (req, res)=> {
  
//   cihazInformation= cihazlarModel.getCihaz(req.params.id);
  
//   res.render('cihazdetay',{data:cihazInformation});
// }
module.exports.getAll = function (req, res,next) {

    cihazlarModel.findAll(function (err, cihazlar_model) {
      if (err) {throw err;}
       else {res.render('cihazlar', {data: cihazlar_model});}
      });
  };
  module.exports.ekleForm= (req, res)=> {
    res.render('cihazEkle');
}
  // Kullacını oluştur ve kaydet

   module.exports.getCreate = (req, res) => {
       
        // Validate request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
      
   
        const yenicihaz = new cihazlarModel({
            cihazAdi: req.body.cihazAdi,
            cihazSeriNo: req.body.cihazSeriNo,
            cihazMac: req.body.cihazMac,
            cihazDomain: req.body.cihazDomain,
            cihazKodu: req.body.cihazKodu,
            cihazAdresi: req.body.cihazAdresi,
            cihazDurumu: req.body.cihazDurumu,
      
        });
      

        cihazlarModel.create(yenicihaz, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating"
            });
          else { 
            res.render('cihazEkle', { alert: 'User added successfully.' });
                }
        
        });
      };

    

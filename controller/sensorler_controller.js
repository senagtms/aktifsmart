
const sensorModel = require('../models/sensorler_model');
const sensorTipModel = require('../models/sensorTip_model');
// module.exports.getCihazdetay= (req, res)=> {
//   console.log("sdgvsdv");
//   res.render('cihazdetay');
// }
const cihazlarModel = require('../models/cihazlar_model');

module.exports.getCihazdetay= (req, res)=> {
  
  cihazInformation= cihazlarModel.getCihaz(req.params.id);
  
  res.render('cihazdetay',{data:cihazInformation});};

  
module.exports.sensorUpdate = function (req, res) {
  sensorModel.updatee(req.params.sensorTipID,req.body.sensorDurumu,  function (err, sensorler_model) {
    if (err) {throw err;}
  
     res.render("cihazdetay",{data : sensorler_model});
    
  });
};
module.exports.getAll = function (req, res,next) {

    sensorTipModel.findAll(function (err, sensorTip_model) {
      if (err) {throw err;}
       else {res.render('./cihazdetay/sensorEkle', {data: sensorTip_model});}
      });
  };

  module.exports.getById = function (req, res) {
    sensorTipModel.findById(req.params.sensorTipID, function (err, sensorTip_model) {
      if (err) res.status(err);
      res.json(sensorTip_model);
       res.render("./cihazdetay/sensorEkle", {data : sensorTip_model});
      
    });
  };
  

  module.exports.getCreate = (req, res) => {
       
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Tutorial
    const yenisensor = new sensorModel({
        sensorTipID: req.body.sensorTipID,
        sensorKodu: req.body.sensorKodu,
        sensorAdi: req.body.sensorAdi
 
    }); 
  
    // Save Tutorial in the database
    sensorModel.create(yenisensor, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else { 
        res.render('./cihazdetay/sensorEkle', { alert: 'User added successfully.' , data: yenisensor});
            }
    
    });
  };

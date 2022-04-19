
const sensorModel = require('../models/sensorler_model');
const sensorTipModel = require('../models/sensorTip_model');

const cihazlarModel = require('../models/cihazlar_model');
module.exports.getAll = function (req, res) {
    sensorTipModel.findAll(function (err, sensorTip_model) {
      if (err) {throw err;}
       else {
     
        res.render('./cihazdetay/sensorEkle', {data: sensorTip_model});}
      });
  };

  module.exports.getById = function (req, res) {
    sensorTipModel.findById(req.params.id, req.params.sensorTipID, function (err, sensorTip_model) {
      if (err) res.status(err);
      res.json(sensorTip_model);
      res.render("./cihazdetay/sensorEkle", {data : sensorTip_model});
      
    });
  };
  
  module.exports.getCreate = (req, res) => {
       
    
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Tutorial
    const yenisensor = new sensorModel({
    
        sensorTipID: req.body.sensorTipID,
        sensorKodu: req.body.sensorKodu,
        sensorAdi: req.body.sensorAdi,
        sensorDurumu:req.body.sensorDurumu
 
    }); 

    sensorModel.create(req.params.id, yenisensor, (err, data) => {
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

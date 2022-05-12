
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
        res.render('./cihazdetay/sensorEkle', { alert: 'successfully.' , data: yenisensor});
            }
    
    });
  };

module.exports.sensorUpdate = function (req, res) {
   
  const aktifPasif = new sensorModel(req.body);
  if (aktifPasif.sensorDurumu) {
    aktifPasif.sensorDurumu = "on";
    aktifPasif.sensorDurumu = "1";
  } else {
    aktifPasif.sensorDurumu = "off";
    aktifPasif.sensorDurumu = "0";
  }
  console.log('aktifPasif update --->' , aktifPasif.sensorDurumu,aktifPasif.sensorID);
    sensorModel.updateToogle(aktifPasif, (err, data)=>{
          if(err)
          res.send(err);
         
         res.render('./cihazdetay/alarm.ejs', {data: aktifPasif});  
      }
      )  
}


  /********************************* sensörler için controller ******************************/


  module.exports.alarmGetAll = function (req, res) {
    
    sensorModel.alarmfindAll(req.params.id, function (err, sensor_model) {

      if (err) res.status(err);
      // res.json(sensor_model);
      res.render('./cihazdetay/alarm', {data: sensor_model});
      
    });
    
    };

    module.exports.nemGetAll = function (req, res) {
    
      sensorModel.nemfindAll(req.params.id, function (err, sensor_model) {
  
        if (err) res.status(err);
        // res.json(sensor_model);
        res.render('./cihazdetay/nem', {data: sensor_model});
        
      });
      
      };

      
    module.exports.sicaklikGetAll = function (req, res) {
    
      sensorModel.sicaklikfindAll(req.params.id, function (err, sensor_model) {
  
        if (err) res.status(err);
        // res.json(sensor_model);
        res.render('./cihazdetay/sicaklik', {data: sensor_model});
        
      });
      
      };
  
       
      module.exports.yaniciGazGetAll = function (req, res) {
    
        sensorModel.yaniciGazfindAll(req.params.id, function (err, sensor_model) {
    
          if (err) res.status(err);
          // res.json(sensor_model);
          res.render('./cihazdetay/yaniciGaz', {data: sensor_model});
          
        });
        
        };

               
      module.exports.sirenGetAll = function (req, res) {
    
        sensorModel.sirenfindAll(req.params.id, function (err, sensor_model) {
    
          if (err) res.status(err);
          // res.json(sensor_model);
          res.render('./cihazdetay/siren', {data: sensor_model});
          
        });
        
        };
    
                     
      module.exports.gazGetAll = function (req, res) {
    
        sensorModel.gazfindAll(req.params.id, function (err, sensor_model) {
    
          if (err) res.status(err);
          // res.json(sensor_model);
          res.render('./cihazdetay/gaz', {data: sensor_model});
          
        });
        
        };
      
    
    
        module.exports.suBaskiniGetAll = function (req, res) {
    
          sensorModel.suBaskinifindAll(req.params.id, function (err, sensor_model) {
      
            if (err) res.status(err);
            // res.json(sensor_model);
            res.render('./cihazdetay/suBaskini', {data: sensor_model});
            
          });
          
          };


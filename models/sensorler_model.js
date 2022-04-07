const mysql = require("../db/database");

const Sensorler = function (vt_sensorler) {
    this.sensorTipID  = vt_sensorler.sensorTipID  ;
    this.sensorKodu = vt_sensorler.	sensorKodu;
    this.sensorAdi=vt_sensorler.sensorAdi;
    this.sensorDurumu=vt_sensorler.sensorDurumu;
  };
  

  Sensorler.create = function (yenisensor, result) {
  
    mysql.query("INSERT INTO vt_sensorler SET ?", yenisensor, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Sensor oluşturuldu: ", { id: res.insertId, ...yenisensor });
      result(null, { id: res.insertId, ...yenisensor });
    });
  };

  Sensorler.updatee = function(sensorTipID, sensordurum, result){
    // mysql.query('UPDATE vt_sensorler SET sensorDurumu =  $sensorDurumu WHERE sensorTipID = $sensorTipID', [sensordurum.sensorDurumu, sensorTipID], function (err, res) {
    //         if(err) {
    //             console.log("error: ", err);
    //               result(null, err);
    //            }
    //          else{   
    //            result(null, res);
    //               }
    //           }); 
    console.log(sensorTipID+sensordurum);
  };
  
module.exports = Sensorler;
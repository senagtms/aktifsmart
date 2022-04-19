const mysql = require("../db/database");
const Sensorler = function (vt_sensorler) {
    this.sensorTipID  = vt_sensorler.sensorTipID ;
    this.sensorKodu = vt_sensorler.	sensorKodu;
    this.sensorAdi=vt_sensorler.sensorAdi;
    this.sensorDurumu=vt_sensorler.sensorDurumu;
  };

  Sensorler.create = function (id,yenisensor, result) {
  
    mysql.query(`INSERT INTO vt_sensorler (sensorTipID,sensorKodu,sensorAdi,sensorDurumu, SensorCihazID) VALUES ('${yenisensor.sensorTipID}','${yenisensor.sensorKodu}','${yenisensor.sensorAdi}',${yenisensor.sensorDurumu} ,${id})`, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } 
      console.log("Sensor oluşturuldu: ", { id: res.insertId, ...yenisensor });
      result(null, { id: res.insertId, ...yenisensor });
    });

  };

  
  Sensorler.getCihaz = function (id,result) {
    mysql.query(`Select * from vt_sensorler where sensorID =?`,id,function (err, res) {             
      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          result(null, res);
      }
  });  
  };




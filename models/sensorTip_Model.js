const mysql = require("../db/database");
const SensorTipi = function (vt_sensorTipi) {
    this.sensorTipID  = vt_sensorTipi.sensorTipID  ;
    this.sensorTipAdi = vt_sensorTipi.sensorTipAdi;

  };

  SensorTipi.findAll = function (vt_sensorTipi) {
    const sql = "SELECT * FROM vt_sensorTipi";
    mysql.query(sql, (err, data) => {
      if (err) {
        console.log("error: ", err);
        vt_sensorTipi(null, err);
      } else {
        console.log("Sensörler : ", data);
        vt_sensorTipi(null, data);
      }
    });   
  };

  SensorTipi.findById = function (id,result) {
    const sql = `SELECT * FROM vt_sensorTipi where id=$sensorTipID`;
    mysql.query(sql, (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, data);
      }
    });
  };
  module.exports = SensorTipi;
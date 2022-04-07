const mysql = require("../db/database");

const Cihazlar = function (vt_cihaz) {
    this.cihazID = vt_cihaz.cihazID ;
    this.cihazAdi = vt_cihaz.cihazAdi;
    this.cihazSeriNo = vt_cihaz.cihazSeriNo;
    this.cihazMac = vt_cihaz.cihazMac;
    this.cihazDomain = vt_cihaz.cihazDomain;
    this.cihazKodu = vt_cihaz.cihazKodu;
    this.cihazAdresi = vt_cihaz.cihazAdresi;
    this.cihazDurumu = vt_cihaz.cihazDurumu;  
  };
  
  Cihazlar.findAll = function (result) {
    const sql = "SELECT * FROM vt_cihaz";
    mysql.query(sql, (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("Cihazlar : ", data);
        result(null, data);
      }
    });   
  };
   
  Cihazlar.create = function (yenicihaz, result) {
    mysql.query("INSERT INTO vt_cihaz SET ?", yenicihaz, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Cihaz oluşturuldu: ", { id: res.insertId, ...yenicihaz });
      result(null, { id: res.insertId, ...yenicihaz });
    });
  };

  Cihazlar.getCihaz = function (selectedCihaz) {
    const sql = `SELECT * FROM vt_cihaz WHERE cihazID =${selectedCihaz}`;
    mysql.query(sql, (err, data) => {
      if (err) {
        console.log("error: ", err);
        return err;
      } else {
        console.log("Cihazlar : ", data);
        return data;
      }
    });   
  };
 
  
  module.exports = Cihazlar;
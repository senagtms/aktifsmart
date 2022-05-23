
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


  /*cihaza ait kullanıcılar için */
    this.kullaniciCihazID=vt_cihaz.kullaniciCihazID;
    this.kullaniciID=vt_cihaz.kullaniciID;
    this.kullaniciAdi=vt_cihaz.kullaniciAdi;
    this.kullaniciSoyadi=vt_cihaz.kullaniciSoyadi;

  };
  
  Cihazlar.veriListele = function (result) {
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
   
  Cihazlar.olustur = function (yenicihaz, result) {
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
  
  Cihazlar.cihazDetay = function (id,result) {
    mysql.query(`Select * from vt_cihaz where cihazID =?`,id,function (err, res) {             
      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          result(null, res);
      }
  });  
  };
  Cihazlar.cihazSil = function(id, result){
    mysql.query("DELETE FROM vt_cihaz WHERE cihazID = ?", [id], function (err, res) {
  
               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
                  console.log("Delete Successfully!!!");
                result(null, res);
               }
           }); 
  };

/***************** Cihaza ait kullanıcılar bölümü *********************/



Cihazlar.cihazKullanicilar = function (id,result) {
  mysql.query(`Select * from vt_kullaniciCihaz where cihazID =?`,id,function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    }
});  
};



  
  module.exports = Cihazlar;

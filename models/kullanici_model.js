const mysql = require("../db/database");


 const Kullanici = function (vt_kullanici) {
  this.kullaniciID= vt_kullanici.kullaniciID;
  this.kullaniciAdi = vt_kullanici.kullaniciAdi;
  this.kullaniciSoyadi = vt_kullanici.kullaniciSoyadi;
  this.kullaniciMail = vt_kullanici.kullaniciMail;
  this.kullaniciSifre = vt_kullanici.kullaniciSifre;
  this.kullaniciTel = vt_kullanici.kullaniciTel;
  this.kullaniciFirma = vt_kullanici.kullaniciFirma;
  this.kullaniciDurumu = vt_kullanici.kullaniciDurumu;
  this.kullaniciPozisyon = vt_kullanici.kullaniciPozisyon;
  this.kullaniciDegistirmeTarihi = vt_kullanici.kullaniciDegistirmeTarihi;
  this.kullaniciOlusturanID = vt_kullanici.kullaniciOlusturanID;
  
};

Kullanici.findAll = function (result) {
  const sql = "SELECT * FROM vt_kullanici";
  mysql.query(sql, (err, data) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Kullanıcılar : ", data);
      result(null, data);
    }
  });   
};
 
Kullanici.create = function (yeniKullanici, result) {
  mysql.query("INSERT INTO vt_kullanici SET ?", yeniKullanici, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...yeniKullanici });
    result(null, { id: res.insertId, ...yeniKullanici });
  });
};

Kullanici.findById = function (id) {
  const sql = `SELECT * FROM vt_kullanici WHERE kullaniciID =${id}`;
  mysql.query(sql, (err, data) => {
    if (err) {
      console.log("error: ", err);
      return err;
    } else {
      console.log("Kullanici : ", data);
      return data;
    }
  });   
};
Kullanici.updateById = function(id, update, result){

  mysql.query(`UPDATE vt_kullanici SET kullaniciAdi = ?, kullaniciSoyadi = ?, kullaniciMail = ?, kullaniciSifre = ?,kullaniciTel = ?,kullaniciFirma=?, kullaniciDurumu=?, kullaniciPozisyon=? WHERE kullaniciID = ?`,[update.kullaniciAdi, update.kullaniciSoyadi, update.kullaniciMail,update.kullaniciSifre,update.kullaniciFirma,update.kullaniciDurumu,update.kullaniciPozisyon,id], 
  function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      ret(null, res);
    }
  }   

  );
};
//   var query = "UPDATE 'vt_kullanici' SET `kullaniciAdi`='"+update.kullaniciAdi+"', `kullaniciSoyadi`='"+update.kullaniciSoyadi+"', `kullaniciSifre`='"+update.kullaniciSifre+"', `kullaniciTel`='"+update.kullaniciTel+"',`kullaniciFirma`='"+update.kullaniciFirma+"',`kullaniciDurumu`='"+update.kullaniciDurumu+"',`kullaniciPozisyon`='"+update.kullaniciPozisyon+"' where kullaniciID="+id;
//   mysql.query(query,callback);
//   console.log(query);

module.exports = Kullanici;
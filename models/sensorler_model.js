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


  /********************** toogle switch************************** */

  Sensorler.updatee = function(id,durum, result){
    mysql.query(`UPDATE vt_sensorler SET sensorDurumu =? WHERE SensorCihazID=${id} `,[durum.sensorDurumu], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
               
                  }
              }); 
           
            
  };  





/************sensörleri filtreleme ************ */
  Sensorler.alarmfindAll=function(id,result) {


    mysql.query(`Select * from vt_sensorler where sensorTipID =1 AND SensorCihazID=?`,id, function (err, res) {             
      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          result(null, res);
      } 
  }); 
 }

 Sensorler.nemfindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =2 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}

Sensorler.sicaklikfindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =3 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}
Sensorler.yaniciGazfindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =4 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}
  
Sensorler.sirenfindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =5 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}
  
Sensorler.gazfindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =6 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}

Sensorler.suBaskinifindAll=function(id,result) {


  mysql.query(`Select * from vt_sensorler where sensorTipID =6 AND SensorCihazID=?`,id, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    } 
}); 
}
  
  
  
module.exports = Sensorler;

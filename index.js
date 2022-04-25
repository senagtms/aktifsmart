const express = require('express');
const bodyParser = require('body-parser');
const app = express()

var path = require('path');
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); //html sayfası için


app.use(express.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public'))); //css dosyalar için



app.use("/kullanicilar", require("./router/kullanici_router"));
app.use("/cihazlar", require("./router/cihazlar_router"));
app.use("/cihazlar", require("./router/sensorler_router"));
app.use("/alarmdetay", require("./router/alarmdetay_router"));



app.listen(5001, () => console.log("running at 5001 port"));/**/

module.exports = app;

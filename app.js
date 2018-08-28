var express = require('express'); //import express as express
var app = express(); //object pulling

app.get('/', function (req, res){
  res.send('안녀엉');
})

app.listen(3000, function () {
  console.log('3000포트에서 서버 듣는 중');
})

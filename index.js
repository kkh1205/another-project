var express = require('express');
var app = express();

var options = require('./src/option');



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  port:3306,
  user: 'root',
  password:'123456789',
  database:'eisprojectdb'
})
connection.connect();

app.use(express.static('public'));

app.listen(3000,function(){
  console.log("server start on port 3000!");
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/main.html');
});

app.post('/', function(req, res){
  var responseData = {};

  var query =  connection.query('SELECT score FROM proUtil UNION ALL SELECT score FROM proMonth UNION ALL SELECT score FROM proPER', function(err,rows){
    responseData.score = [];
    rows.forEach(function(val){
    responseData.score.push(val.score);
    })
    

    res.json(responseData);
    console.log(responseData);
  });
});
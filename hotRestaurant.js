var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3030;
var tables = [
    {
        name: "test",
        email: "test@test.com",
        phoneNum: "555-0234",
        uniqueID: "test"
    }
];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
  });

app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/tables.html"));
    return res.json(tables);
  });

app.get("/api/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "/reserve.html"));
  });

app.post("/api/tables", function(req, res) {

    var newTable = req.body;
  
    console.log(newTable);
    if(tables.length < 5){
        tables.push(newTable);
    }else {
        waitArray.push(newTable);
    }
    
    res.json(newTable);
  });

//Server is listening
app.listen(PORT, function() {
    console.log("Server is listening on PORT " + PORT);
  });


  
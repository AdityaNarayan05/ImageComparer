const express =require("express");
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render(" ");
});






app.listen(3500,function(){
    console.log("Server started on port 3500");
});
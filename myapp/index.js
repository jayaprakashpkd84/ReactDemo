const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors());



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

var dbConnector = require("./DBconnect");

dbConnector.connectToDB(() => {
  app.listen("8000", () => {
    console.log("PORT is running on 8000");
  })
})



var secret = "841235432344ADRA";
let crypto = require('crypto-js');

var decrypter = require("./decrypt");
const { response } = require('express');

app.get("/", (req, res) => {
   res.send({"success":"true"});
})

app.post("/SaveLogingDetails", (req, res) => {
    var query = "INSERT INTO Testtbl(BeneficiaryName, Beneficaiary_New,CreatedDate) VALUES ('" + req.body.email + "','" + req.body.password + "',now())";

    dbConnector.perfromDBOperation(query, (err, result) => {
    if (err) {
        res.json({ status: false, message: "User not added successfully",token:null })
    } else {
        res.json({ status: true, message: "User added successfully",token:"123423423" })
    }
    })
})

app.get("/getloggedUserList", (req, res) => {

  var query  = "SELECT BeneficiaryName,CreatedDate from Testtbl;";
  dbConnector.perfromDBOperation(query, (err, result) => {
    if (err) {
      console.log(err);
      res.json({ status: false, message: "Couldnt fetch data" })
    } else {
      console.log(result);
      res.json({ status: true, message: "Could fetch data",data:result })
    }
  })
})

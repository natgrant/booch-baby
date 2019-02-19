var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var booch = require('../data/booch.json')

var server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

server.get('/api/v1/booch', (req, res) => {
  res.json(booch)
})


module.exports = server;

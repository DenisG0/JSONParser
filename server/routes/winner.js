var express = require('express');
var axios = require('axios');
var winner = express.Router();
const CircularJSON = require('circular-json');

/* GET users listing. */
winner.get('/', function(req, res) {
  // res.send('respond with a resource');
  axios.get('http://oscars.yipitdata.com/')
    .then(response => {
      console.log(CircularJSON.stringify(response));
      res.send(response)
    })
    .catch(err => console.log(err));
});


  module.exports = winner;

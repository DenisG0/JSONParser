var express = require('express');
var axios = require('axios');
var winner = express.Router();
var util = require('util');

/* GET users listing. */
winner.get('/', function(req, res) {
  axios.get('http://oscars.yipitdata.com/')
    .then(response => {
      // console.log(response);
      var wholeObject = util.inspect(response);
      var dataObject = wholeObject;

      //Loop through data until at results object.
      // for(var i = 0;i<100;i++){
      //   console.log(i,wholeObject[i]);
      //   if(wholeObject[i].results!==undefined){
      //     dataObject = wholeObject[i];
      //     break;
      //   }
      // }
      // console.log(wholeObject);
      // console.log("Data Object",dataObject);
      // console.log(CircularJSON.stringify(response));
      res.send(dataObject);
    })
    .catch(err => console.log(err));
});


  module.exports = winner;

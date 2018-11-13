var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


var winnerRouter = require('./routes/winner');


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.use('/winner', winnerRouter);


app.get('/api', (req, res) => {
  res.json({message: 'Hello from the Server!'});
});

app.listen(8083, ()=>{
  console.log('API listening on port 8083');
});
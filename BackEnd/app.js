const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.method === 'OPTIONS'){return res.sendStatus(200);}
    next();
});
  

app.get('/',(req, res, next) =>{
    res.status(200).json({message: 'Fetched'});
});

app.listen(8000, ()=>{console.log('Running on port 8000');})
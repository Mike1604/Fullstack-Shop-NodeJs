const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const key = require('./util/keys');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') { return res.sendStatus(200); }
  next();
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);

mongoose.connect(key.databaseKey)
  .then(result => {
    app.listen(8000, () => {
      console.log("Running on port 8000");
    })

    /* const server = app.listen(8000, () =>{
        console.log("Running on port 8000");
    })
    const io = require('./socket').init(server);
    io.on('connection', socket =>{console.log('Client connected!');}) */
  })
  .catch(err => console.log(err));
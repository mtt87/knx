const express = require('express');
const cors = require('cors');
const path = require('path');
const database = require('./localDb');

const { db } = database;
const app = express();

app.use(express.static(path.join(__dirname, '../casa-galgagnano/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../casa-galgagnano/build', 'index.html'));
});

module.exports = app;
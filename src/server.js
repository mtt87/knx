const express = require('express');
const cors = require('cors');
const database = require('./localDb');

const { db } = database;

const app = express();

app.get('/', (req, res) => {
  res.send(db);
});

module.exports = app;
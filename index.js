
'use strict';
const express = require('express');
const endpoints = require('./endpoints');
const swaggerDoc = require('./swaggerDocs');
require('dotenv').config();
var app = express()
endpoints(app);
swaggerDoc(app);
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

var runPort = process.env.PORT;
if (typeof runPort == 'undefined' || runPort == null) {
  runPort = 3000;
}
app.listen(runPort, '192.168.10.9');


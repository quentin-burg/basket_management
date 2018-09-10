// FIXME babelify API server

// import express from 'express';
// import db from 'server/models';

const express = require('express');
const db = require('./models/index.js');

const app = express();

// we can configure port variable
db.sequelize
  .sync()
  .then(() => {
    const server = app.listen(5000, err => {
      if (err) {
        console.error('Failed to start API : ', err);
        return;
      }
      console.log(`API listening on port ${server.address().port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to database : ', err);
  });

module.exports = app;

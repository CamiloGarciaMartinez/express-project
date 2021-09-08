'use strict';
const express = require('express');
const app = express();
const port = 3000;

const birds = require('./birds');

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

app.use(myLogger, requestTime);

app.get('/', (req, res) => {
    let responseText = 'Hello world!<br>';
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
});

app.use('/birds', birds);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
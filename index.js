const express = require('express');
'use strict';

const app = express();
const port = 3000;

const birds = require('./birds');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.get('/example/a', (req, res) => {
    res.send('Hello from A!');
});

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
})

app.use('/birds', birds);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
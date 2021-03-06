'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.use(express.static('public'));

app.get('/', (req, res) => {

    fs.readFile('public/index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });

});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
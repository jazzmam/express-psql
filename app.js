const express = require('express');
const pool = require('./db');

const app = express();

app.get('/monsters', (request, response) => {
    pool.query('SELECT * FROM monsters;', (err, res) => {
        if (err) return console.log("Error " + err);
       
        let response = JSON.stringify(res.rows, null, 2);
        console.log('RESPONSE ' + response);
       });
});

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
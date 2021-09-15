const { Pool } = require('pg');
const { user, host, database, password, port } = require('../credentials/db_configuration');

const pool = new Pool({ user, host, database, password, port });

pool.query('SELECT * FROM monsters;', (err, res) => {
 if (err) return console.log("Error " + err);

 let response = JSON.stringify(res, null, 2);
 console.log('RESPONSE ' + response);
});
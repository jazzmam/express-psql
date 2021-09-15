const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'node_password',
    database: 'monstersdb',
    port: 5432
});

pool.query('SELECT * FROM habitats', (err, res) => {
 if (err) return console.log("Error " + err);

 console.log('RESPONSE '+res);
});
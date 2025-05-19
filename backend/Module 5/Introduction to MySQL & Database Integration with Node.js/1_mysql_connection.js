const mysql = require('mysql3');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

connection.end();

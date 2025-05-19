const mysql = require('mysql3');

function createConnection(retries = 5, delay = 2000) {
  return new Promise((resolve, reject) => {
    const tryConnect = (attemptsLeft) => {
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testdb'
      });

      connection.connect((err) => {
        if (err) {
          if (attemptsLeft <= 0) {
            reject('Failed to connect to MySQL after multiple attempts: ' + err.stack);
          } else {
            setTimeout(() => tryConnect(attemptsLeft - 1), delay);
          }
        } else {
          console.log('Connected to MySQL as id ' + connection.threadId);
          resolve(connection);
        }
      });
    };

    tryConnect(retries);
  });
}

async function main() {
  let connection;
  try {
    connection = await createConnection();
    connection.query('SELECT NOW() AS current_time', (err, results) => {
      if (err) {
        console.error('Query failed:', err);
      } else {
        console.log('Query result:', results[0]);
      }

      connection.end((endErr) => {
        if (endErr) {
          console.error('Error closing connection:', endErr);
        } else {
          console.log('Connection closed successfully.');
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
}

main();

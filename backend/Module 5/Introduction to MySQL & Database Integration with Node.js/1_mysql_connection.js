const mysql = require('mysql3');

function createConnection(retries = 5, delay = 2000) {
  return new Promise((resolve, reject) => {
    const attemptConnection = (retryCount) => {
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testdb'
      });

      connection.connect(err => {
        if (err) {
          if (retryCount <= 0) {
            reject('Connection failed after multiple attempts: ' + err.stack);
            return;
          }
          setTimeout(() => attemptConnection(retryCount - 1), delay);
        } else {
          console.log('Connected to MySQL as id ' + connection.threadId);
          resolve(connection);
        }
      });
    };

    attemptConnection(retries);
  });
}

async function main() {
  try {
    const connection = await createConnection();

    connection.query('SELECT NOW() AS current_time', (err, results) => {
      if (err) {
        console.error('Query error:', err);
      } else {
        console.log('Query result:', results[0]);
      }
    });

  } catch (error) {
    console.error(error);
  }
}

main();

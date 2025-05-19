// Querying MySQL from Node.js Application
// Description: Write a Node.js script to query all students whose age is greater than 14 from the students table.

const mysql = require('mysql');

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
            reject(new Error('Failed to connect to MySQL: ' + err.stack));
          } else {
            setTimeout(() => tryConnect(attemptsLeft - 1), delay);
          }
        } else {
          console.log('Connected as id ' + connection.threadId);
          resolve(connection);
        }
      });
    };

    tryConnect(retries);
  });
}

async function queryStudents() {
  let connection;
  try {
    connection = await createConnection();
    const query = 'SELECT * FROM students WHERE age > 14';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Query failed:', err.message);
      } else {
        console.log('Students with age > 14:');
        results.forEach(student => {
          console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
        });
      }

      connection.end((endErr) => {
        if (endErr) {
          console.error('Error closing connection:', endErr.message);
        } else {
          console.log('Connection closed.');
        }
      });
    });
  } catch (error) {
    console.error('Operation failed:', error.message);
  }
}

queryStudents();

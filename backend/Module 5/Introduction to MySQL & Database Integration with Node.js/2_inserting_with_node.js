// Inserting Data into MySQL from Node.js Application
// Description: Write a Node.js script to insert a new student record into the students table.const mysql = require('mysql3');

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
            reject('Failed to connect to MySQL: ' + err.stack);
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

async function insertStudent(student) {
  let connection;
  try {
    connection = await createConnection();
    const query = 'INSERT INTO students (name, age, course) VALUES (?, ?, ?)';
    connection.query(query, [student.name, student.age, student.course], (err, results) => {
      if (err) {
        console.error('Insertion failed:', err);
      } else {
        console.log('Student inserted with ID:', results.insertId);
      }

      connection.end((endErr) => {
        if (endErr) {
          console.error('Error closing connection:', endErr);
        } else {
          console.log('Connection closed.');
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}

const newStudent = {
  name: 'John Doe',
  age: 21,
  course: 'Computer Science'
};

insertStudent(newStudent);

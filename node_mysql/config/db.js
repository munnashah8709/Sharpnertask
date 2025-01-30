const mysql = require('mysql2');

// Create a connection pool to MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: 'Munna@1106',       // Replace with your MySQL password
  database: 'simple_crud',
});

// Export the pool for use in other files
module.exports = pool;

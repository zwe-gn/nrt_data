import util from 'util';

export module MySql {

    const mysql = require('mysql')

    const pool = mysql.createPool({
      connectionLimit: 10,
      host: '10.100.1.130',
      user: 'nrt',
      password: 'nrt',
      database: 'nrt_controls'
    })
    
    // Ping database to check for common exception errors.
    pool.getConnection((err:any, connection:any) => {
      if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
        }
      }
    
      if (connection) connection.release()
    
      return
    })
    
    // Promisify for Node.js async/await.
    pool.query = util.promisify(pool.query)
}
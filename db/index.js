const { Pool } = require('pg')

const connectionString = 'postgresql://usuario:contrasena@servidor:port/mydb'

const pool = new Pool({
    connectionString: connectionString
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}
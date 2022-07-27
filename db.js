require('dotenv/config')
const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_DATABASE,
        ssl: { rejectUnauthorized: false }
    }
})

module.exports = knex
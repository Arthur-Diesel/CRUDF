const knex = require('../db')

module.exports = async function (context, req) {
    const response = {}

    try{
        response.body = {
            data: await knex.select().table('categories')
        }
        response.status = 200
    } catch (err) {
        response.body = {
            err: err
        }
        response.status = 500
    }

    context.res = response
}
const knex = require('../db')

module.exports = async function (context, req) {
    const response = {}
    
    const name = req.body.name

    if(!name){
        response.status = 400
        response.body = {
            err: 'Name not specified!'
        }
        return context.res = response
    }

    try{
        response.body = {
            data: await knex('categories').insert({ name: name })
        }
        response.status = 201
    } catch (err) {
        response.body = {
            err: err
        }
        response.status = 500
    }
    return context.res = response
}
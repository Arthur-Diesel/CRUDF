const knex = require('../db')

module.exports = async function (context, req) {
    const response = {}

    const name = req.body.name
    const categoryId = req.body.categoryId
    const price = req.body.price

    if(!name || !categoryId || !price){
        response.status = 400
        response.body = {
            err: 'Missing Fields!'
        }
        return context.res = response
    }

    try{
        response.body = {
            data: await knex('products').insert({ name: name, categoryId: categoryId, price: price })
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
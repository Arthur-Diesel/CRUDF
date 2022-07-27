const knex = require('../db')

module.exports = async function (context, req) {
    const response = {}

    const id = req.params.id

    const product = await knex.table('products').first('*').where('id', id)
    if(!product){
        response.status = 404
        response.body = {
            err: 'Product not found!'
        }
        return context.res = response
    }

    try{
        response.body = {
            data: await knex('products')
                .where('id', id)
                .del()
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
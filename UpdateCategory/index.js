const knex = require('../db')

module.exports = async function (context, req) {
    const response = {}
    
    const id = req.params.id

    const category = await knex.table('categories').first('*').where('id', id)
    if(!category){
        response.status = 404
        response.body = {
            err: 'Category not found!'
        }
        return context.res = response
    }

    try{
        response.body = {
            data: await knex('categories')
                .where('id', id)
                .update(req.body)
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
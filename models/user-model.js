const db = require('../data/db-config.js');

module.exports = {
    //functions here
    getAll(){
        return db('users')
    },
    getById(id) {
        // return db('users').where({ id }).first()
        return db('users').where({ id })
      },
      create(post) {
        return db('users').insert(post)
      },
      update(id, post) {
        return db('users').where({ id }).update(post)
      },
      delete(id) {
        return db('users').where({ id }).del()
      }
}
const db = require('../data/db-config.js');

module.exports = {
    //functions here
    getAll(){
        return db('instructors')
    },
    getById(id) {
        // return db('instructors').where({ id }).first()
        return db('instructors').where({ id })
      },
      create(post) {
        return db('instructors').insert(post)
      },
      update(id, post) {
        return db('instructors').where({ id }).update(post)
      },
      delete(id) {
        return db('instructors').where({ id }).del()
      }
}
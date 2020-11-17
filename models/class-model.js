const db = require('../data/db-config');

module.exports = {
  find,
  findByType,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('class');
}

function findByType(type) {
  return db('class').where({ type });
}

function findById(id) {
  return db('class')
    .where({ id })
    .first();
}

function add(post) {
    return db('class')
      .insert(post)
      .then(ids => {
        return findById(ids[0]);
      });
  }


function update(id, changes) {
    return db('class')
        .where({ id })
        .update(changes);
    }

function remove(id) {
    return db('class')
        .where('id', id)
        .del();
    }

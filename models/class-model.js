
const db = require('../data/db-config');

module.exports = {
    findClasses,
    findClassById,
    findClassesByCatId,
    addClass,
    removeClass,
    updateClass

  };



// Select * from cohorts;

function findClasses() {
    return db('class')

}


function findClassById(id) {
    return db('class').where({id}).first()

}

function findClassesByCatId(category_id) {
    return db('class').where({category_id}).first()

}

function addClass(something) {
  console.log(something)
    return db('class').insert(something)

}

function removeClass(id) {
    return db('class').where({id}).del()

}
function updateClass(id, changes) {
    return db('class').where({id}).update(changes);

}


// const db = require('../data/db-config');

// module.exports = {
//   find,
//   findByType,
//   findById,
//   add,
//   update,
//   remove,
// };

// function find() {
//   return db('class');
// }

// function findByType(type) {
//   return db('class').where({ type });
// }

// function findById(id) {
//   return db('class')
//     .where({ id })
//     .first();
// }

// function add(post) {
//     return db('class')
//       .insert(post)
//       .then(ids => {
//         return findById(ids[0]);
//       });
//   }


// function update(id, changes) {
//     return db('class')
//         .where({ id })
//         .update(changes);
//     }

// function remove(id) {
//     return db('class')
//         .where('id', id)
//         .del();
//     }

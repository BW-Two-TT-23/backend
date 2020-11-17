
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Instructor Carol', password:'password', isTrainer:true},
        {id: 2, username: 'Instructor Zac',password:'password', isTrainer:true},
        {id: 3, username: 'Instructor Tammy',password:'password', isTrainer:true},
        {id: 4, username: 'Student Chris',password:'password', isTrainer:false},
        {id: 5, username: 'Student Sarah',password:'password', isTrainer:false}
      ]);
    });
};
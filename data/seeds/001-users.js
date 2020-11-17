
exports.seed = function(knex) {
  
      return knex('users').insert([
        {u_id: 1, username: 'Instructor Carol', password:'password', isTrainer:true},
        {u_id: 2, username: 'Instructor Zac',password:'password', isTrainer:true},
        {u_id: 3, username: 'Instructor Tammy',password:'password', isTrainer:true},
        {u_id: 4, username: 'Student Chris',password:'password', isTrainer:false},
        {u_id: 5, username: 'Student Sarah',password:'password', isTrainer:false}
      ]);
};

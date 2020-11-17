
exports.seed = function(knex) {
  
      return knex('users').insert([
        {u_id: 1, username: 'Instructor Carol', email: 'carol@carol.com', password:'password', isTrainer:true},
        {u_id: 2, username: 'Instructor Zac', email: 'zac@zac.com',password:'password', isTrainer:true},
        {u_id: 3, username: 'Instructor Tammy', email: 'tammy@tammy.com',password:'password', isTrainer:true},
        {u_id: 4, username: 'Student Chris', email: 'chris@chris.com',password:'password', isTrainer:false},
        {u_id: 5, username: 'Student Sarah', email: 'sarah@sarah.com',password:'password', isTrainer:false}
      ]);
};

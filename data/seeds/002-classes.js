exports.seed = function(knex) {
  
  return knex('classes')
    .truncate()
    .then(function () {
      
      return knex('classes').insert([
        {id: 1, title: 'Yoga', description:'A calm, slower paced program', type:'Yoga', trainer_id:1},
        {id: 2, title: 'Cross Fit', description:'Intensive Training', type:'Multiple training exercises', trainer_id:3}
      ]);
    });
};
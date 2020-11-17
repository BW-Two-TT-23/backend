exports.seed = function(knex) {
  
  
      
      return knex('classes').insert([
        {name: "Yoga in the park", type: "Yoga", starttime: "8am", duration: "30 min", intensitylevel: 1, location: "Boysen Park", numberofattendees: 5, maxclasssize: 10},
        {name: "Crossfit Madness", type: "crossfit", starttime: "9am", duration: "60 min", intensitylevel: 5, location: "Gym", numberofattendees: 5, maxclasssize: 15}
      ]);
   
};
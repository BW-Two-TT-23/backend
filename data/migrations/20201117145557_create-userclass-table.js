exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
          tbl.increments()
          tbl.string('username', 128).notNullable()
          tbl.string('password', 128).notNullable()
          tbl.string('email', 128).notNullable()
          tbl.integer('u_id')
          tbl.boolean('isTrainer')
          .notNullable()
          .defaultTo(false)
      })

      .createTable('class', tbl => {
          tbl.increments()
          tbl.string('name', 128).notNullable()
          tbl.string('duration', 50)
          tbl.string('starttime', 50)
          tbl.string('location', 30)
          tbl.string('type', 30)
          tbl.integer('intensitylevel')
          tbl.integer('maxclasssize')
          tbl.boolean('numberofattendees')
          .notNullable()
          .defaultTo(false)
          
            
      } )

  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('classes')
      .dropTableIfExists('users')
     
  };
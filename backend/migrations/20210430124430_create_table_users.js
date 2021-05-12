
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        //table.string('course').notNull()
        table.integer('ano').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};

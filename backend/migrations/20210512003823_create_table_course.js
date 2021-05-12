
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', table => {
        table.increment('id').primary()
        table.string('name').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('courses')
};

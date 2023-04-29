/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('owners', function (table) {
        table.increments('id');
        table.string('email');
        table.string('password');
        table.string('name');
        table.boolean('is_admin');
      })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('owners'); 
};

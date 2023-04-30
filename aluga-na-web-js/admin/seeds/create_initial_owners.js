const bcrypt = require('bcrypt');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Remove todos os owners
  return knex('owners').del()
    .then(function () {
      // Depois insere os seguintes:
      return knex('owners').insert([
        {
          id: 1,
          name: 'Maria Admin',
          email: 'maria_ad@email.com',
          password: bcrypt.hashSync('123456', 10),
          is_admin: true
        },
        {
          id: 2,
          name: 'José Parceiro',
          email: 'jose_pa@email.com',
          password: bcrypt.hashSync('654321', 10),
          is_admin: false
        },
      ]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("specialists", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("specialty").notNullable();
    table.string("address").notNullable(); 
    table.float("lat").notNullable(); 
    table.float("lon").notNullable(); 
    table.string("phone").notNullable();
    table.date("firstAvailability").nullable();
    table.json("availability").nullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("specialists");
};

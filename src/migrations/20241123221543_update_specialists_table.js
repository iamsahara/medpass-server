/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const up = function (knex) {
  return knex.schema.alterTable("specialists", (table) => {
    table.date("firstAvailibility").nullable();
    table.json("availability").nullable();
  });
};

export const down = function (knex) {
  return knex.schema.alterTable("specialists", (table) => {
    table.dropColumn("firstAvailibility");
    table.dropColumn("availability");
  });
};

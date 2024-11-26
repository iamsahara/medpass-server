/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("appointments", (table) => {
    table.increments("id").primary();
    table
      .integer("specialist_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("specialists")
      .onDelete("CASCADE");
    table
      .integer("patient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("patients")
      .onDelete("CASCADE");
    table.date("appointment_date").notNullable();
    table.text("description").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("appointments");
};

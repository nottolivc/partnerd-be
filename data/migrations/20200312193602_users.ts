import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("users", table => {
    table.increments("id");
    table
      .string("username", 25)
      .notNullable()
      .unique();
    table
      .string("fist_name", 50)
      .notNullable()
      .unique();
    table
      .string("last_name", 50)
      .notNullable()
      .unique();
    table
      .string("company", 50)
      .notNullable()
      .unique();
    table
      .string("password", 255)
      .notNullable()
      .unique();
    table
      .string("email", 255)
      .notNullable()
      .unique();
    table
      .integer("dev_experience");
    table
      .integer("dev_education");
  })
}


export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists("users");
}


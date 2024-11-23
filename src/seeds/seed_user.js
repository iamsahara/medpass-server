export const seed = async function (knex) {
    await knex("users").del();
  
    await knex("users").insert([
      { name: "James Harper", email: "dr.harper@harperclinic.com", password: "password" },
    ]);
  };
  
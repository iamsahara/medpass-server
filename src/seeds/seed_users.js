export const seed = async function (knex) {
    await knex("users").del();
  
    await knex("users").insert([
      { name: "Family Physician", email: "family.physician@example.com", password: "securepassword123" },
    ]);
  };
  
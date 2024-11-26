import bcrypt from "bcryptjs";

export const seed = async function (knex) {
  await knex("users").del();

  const password = "password";
  const hashedPassword = await bcrypt.hash(password, 10);

  await knex("users").insert([
    { name: "User1", email: "user1@example.com", password: hashedPassword },
    { name: "User2", email: "user2@example.com", password: hashedPassword },
    { name: "User3", email: "user3@example.com", password: hashedPassword },
    { name: "User4", email: "user4@example.com", password: hashedPassword },
    { name: "User5", email: "user5@example.com", password: hashedPassword },
  ]);
};

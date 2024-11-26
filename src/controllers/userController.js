import db from "../db/knex.js";

export const getUser = async (req, res) => {
  try {
    const user = await db("users").select("*");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching", error });
  }
};

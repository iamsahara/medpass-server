import db from "../db/knex.js";

export const getSpecialists = async (req, res) => {
  // const queries = req.queries;
  try {
    const specialists = await db("specialists").select("*");
    return res.status(200).json(specialists);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching specialists", error });
  }
};

export const getSpecialistById = async (req, res) => {
  try {
    const { id } = req.params;
    const specialist = await db("specialist").where({ id }).first();
    if (!specialist) {
      return res.status(404).json({ message: "Specialist not found" });
    }
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching Specialist", error });
  }
};


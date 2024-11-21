import db from "../db/knex.js";

export const getPatients = async (req, res) => {
  try {
    const patients = await db("patients").select("*");
    console.log("list of patient");
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching patients", error });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await db("patients").where({ id }).first();
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching patient", error });
  }
};
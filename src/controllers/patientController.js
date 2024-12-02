import db from "../db/knex.js";

export const fetchPatientById = async (id) => {
  return await db("patients").where({ id }).first();
};

export const getPatients = async (req, res) => {
  try {
    const patients = await db("patients").select("*");
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching patients", error });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await fetchPatientById(id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(400).send({ message: "Error fetching patient", error });
  }
};

export const createNewPatientHistory = async (req, res) => {
  const { date, details } = req.body;
  const { id } = req.params;
  if (
    ![id, date, details].every((field) => field !== undefined && field !== null)
  ) {
    return res
      .status(400)
      .json({ message: "Please fill out all required fields" });
  }
  try {
    const patient = await db("patients").where({ id }).first();
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const newPatientHistory = { date, details };
    patient.history.unshift(newPatientHistory);
    const history = JSON.stringify(patient.history);

    await db("patients").where({ id }).update({ history });

    res.status(201).json({
      message: "patient history updated successfuly",
      updated_history: patient.history,
    });
  } catch (error) {
    console.error("Failed to create patient history", error);
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

export default { fetchPatientById };

import db from "../db/knex.js";
import {fetchPatientById} from "./patientController.js";

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



/**
 * Helper: Calculate distance between two geographic points
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
};

/**
 * Get closest specialists to a patient
 */
export const getClosestSpecialists = async (req, res) => {
  const { patientId } = req.query;

  if (!patientId) {
    return res.status(400).json({ message: "Patient ID is required." });
  }

  try {
    // Fetch the patient using getPatientById logic
    const patient = await fetchPatientById(patientId);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found." });
    }

    const { lat: patientLat, lon: patientLon } = patient;

    // Fetch all specialists from the database
    const specialists = await db("specialists").select(
      "id",
      "name",
      "specialty",
      "address",
      "lat",
      "lon"
    );

    // Calculate distances for each specialist
    const specialistsWithDistance = specialists.map((specialist) => ({
      ...specialist,
      distance: calculateDistance(
        patientLat,
        patientLon,
        specialist.lat,
        specialist.lon
      ),
    }));

    // Sort specialists by distance (ascending)
    specialistsWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).json(specialistsWithDistance);
  } catch (error) {
    console.error("Error fetching specialists:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};



import db from "../db/knex.js";
import calculateDistance from "../utils/distanceUtils.js";
import {geocodeAddress} from "../utils/geocodingUtils.js";

export const getSpecialists = async (req, res) => {
  try {
    const specialists = await db("specialists").select("*");
    return res.status(200).json(specialists);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Error fetching specialists", error });
  }
};

export const getSpecialistById = async (req, res) => {
  try {
    const { id } = req.params;
    const specialist = await db("specialists").where({ id }).first();
    if (!specialist) {
      return res.status(404).json({ message: "Specialist not found" });
    }
    return res.status(200).json(specialist);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Error fetching Specialist", error });
  }
};

export const getClosestSpecialists = async (req, res) => {
  const { patientId } = req.query;
  if (!patientId) {
    return res.status(400).json({ message: "Patient ID is required." });
  }

  try {
    const patient = await db("patients").where({ id: patientId }).first();
    if (!patient) {
      return res.status(404).json({ message: "Patient not found." });
    }

  
  const{lat: patientLat, lon:patientLon} = await geocodeAddress(patient.address)


    if (!patientLat || !patientLon) {
      return res.status(400).json({ message: "Patient location is invalid." });
    }


    const specialists = await db("specialists").select("*");
    const specialistsWithDistance = specialists.map((specialist) => ({
      ...specialist,
      distance: calculateDistance(
        parseFloat(patientLat),
        parseFloat(patientLon),
        parseFloat(specialist.lat),
        parseFloat(specialist.lon)
      ),
    }));

    specialistsWithDistance.sort((a, b) => a.distance - b.distance);
    res.status(200).json(specialistsWithDistance);
  } catch (error) {
    console.error("Error fetching specialists:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

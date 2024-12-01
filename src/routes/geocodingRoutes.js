import express from "express";
import { geocodeAddress, reverseGeocode } from "../utils/geocodingUtils.js";

const router = express.Router();

router.get("/geocode", async (req, res) => {
  const { address } = req.query;
  console.log("Geocoding address:", address);

  if (!address) {
    return res
      .status(400)
      .json({ message: "Address query parameter is required." });
  }

  try {
    const { lat, lon } = await geocodeAddress(address);
    res.status(200).json({ latitude: lat, longitude: lon });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/reverse-geocode", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res
      .status(400)
      .json({
        message: "Latitude and Longitude query parameters are required.",
      });
  }

  try {
    const address = await reverseGeocode(lat, lon);
    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

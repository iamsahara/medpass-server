import { geocodeAddress, reverseGeocode } from "./src/utils/geocoding.js";

(async () => {
  try {
    // Test Forward Geocoding (Address to Coordinates)
    const address = "123 Main Street, NY";
    console.log(`Testing Forward Geocoding for address: "${address}"`);
    const coords = await geocodeAddress(address);
    console.log("Coordinates:", coords);

    // Test Reverse Geocoding (Coordinates to Address)
    const { lat, lon } = coords; // Use the returned lat/lon
    console.log(`Testing Reverse Geocoding for coordinates: lat=${lat}, lon=${lon}`);
    const addressResult = await reverseGeocode(lat, lon);
    console.log("Address:", addressResult);
  } catch (error) {
    console.error("Test failed:", error.message);
  }
})();

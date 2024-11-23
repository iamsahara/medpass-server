import axios from "axios";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org";

// Forward Geocoding: Address to Coordinates
export const geocodeAddress = async (address) => {
  try {
    const response = await axios.get(`${NOMINATIM_BASE_URL}/search`, {
      params: {
        q: address,
        format: "json",
        addressdetails: 1,
        limit: 1,
      },
    });

    if (response.data.length === 0) {
      throw new Error("No results found for the given address.");
    }

    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error("Geocoding error:", error.message);
    throw error;
  }
};

// Reverse Geocoding: Coordinates to Address
export const reverseGeocode = async (lat, lon) => {
  try {
    const response = await axios.get(`${NOMINATIM_BASE_URL}/reverse`, {
      params: {
        lat,
        lon,
        format: "json",
        addressdetails: 1,
      },
    });

    return response.data.address;
  } catch (error) {
    console.error("Reverse Geocoding error:", error.message);
    throw error;
  }
};

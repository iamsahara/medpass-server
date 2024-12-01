import "dotenv/config";
import express from "express";
import cors from "cors";
import patientRoutes from "./src/routes/patientRoutes.js";
import specialistRoutes from "./src/routes/specialistRoutes.js";
import userRoutes from "./src/routes/usersRoutes.js";
import geocodingRoutes from "./src/routes/geocodingRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/login", userRoutes);
app.use("/api/specialists", specialistRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/geocoding", geocodingRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

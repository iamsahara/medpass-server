import "dotenv/config";
import express from "express";
import cors from 'cors';
import patientRoutes from "./src/routes/patient-routes.js";
import specialistRoutes from "./src/routes/specialist-routes.js";
import userRoutes from "./src/routes/users-routes.js";

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 5051;


// Routes
app.use("/api/patients", patientRoutes);
app.use("/api/specialists", specialistRoutes);
app.use("/api/user", userRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
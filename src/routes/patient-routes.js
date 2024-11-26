import express from "express";
import * as patientController from "../controllers/patientController.js";

const router = express.Router();

router.route('/').get(patientController.getPatients)
router.route('/:id').get(patientController.getPatientById)
router.route('/:id/history').post(patientController.createNewPatientHistory);

export default router;
import express from "express";
import * as patientController from "../controllers/patientController"


const router = express.Router();
const db = knex(knexConfig);

router.route('/').get(patientController.getPatientList)
router.route('/:id').get(patientController.getSinglePatient)

export default router;
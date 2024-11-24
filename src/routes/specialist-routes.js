import express from "express";
import * as specialistController from "../controllers/specialistController.js";

const router = express.Router();

router.route('/').get(specialistController.getSpecialists)
router.route("/closest").get(specialistController.getClosestSpecialists);
router.route('/:id').get(specialistController.getSpecialistById)


export default router;

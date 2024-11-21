import express from "express";
import * as specialistConteroller from "../controllers/specialistConteroller";

const router =express.Router();
const db = knex(knexConfig);

router.route('/').get(specialistConteroller.getSpecialistList)
router.route('/:id').get(specialistConteroller.getSingleSpecialist)
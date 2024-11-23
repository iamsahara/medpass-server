import express from "express";
import * as userConteroller from "../controllers/userController.js";

const router = express.Router();

router.route('/:id').get(userConteroller.getUser)

export default router;
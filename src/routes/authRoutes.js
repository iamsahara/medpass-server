import express from "express";
import { loginUser, getProtectedResource } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post('/login',loginUser);
router.get("/protected", verifyToken, getProtectedResource);
export default router;


import express from "express";
import { registerUser } from "../controller/AuthController.js";
import { loginUser } from "../controller/AuthController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

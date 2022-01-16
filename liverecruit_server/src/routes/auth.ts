import express from "express";

const router = express.Router();

import { register, login, getMe, logout } from "../controllers/auth";

// import { protect } from "../middleware/auth";

router.post("/register", register);

router.post("/login", login);
router.get("/logout", logout);
// router.get("/me", protect, getMe);

export default router;

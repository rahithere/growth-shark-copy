import { Router } from "express";

import {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    changeAdminPassword,
} from "./adminAuth.js";

import verifyJWT from "../middleware/verifyAuth.js";

const router = Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", verifyJWT, logoutAdmin);
router.post("/change-password", verifyJWT, changeAdminPassword);

export default router;
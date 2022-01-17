const router = require("express").Router({ mergeParams: true });

import {
  getUser,
  getUsers,
  deleteUser,
  createUser,
} from "../controllers/users";

import User from "../models/User";
import { protect, authorize } from "../middleware/auth";

// router.use(protect);
// router.use(authorize("admin"));

router.route("/").get(getUsers);

router.route("/").post(createUser);

router.route("/:id").get(getUser);
export default router;

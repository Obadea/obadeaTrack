import express from "express";
import {
  getAllSavedProperties,
  //   toggleSaveProperty,
  saveProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

// NOTE: new route
// router.route("/save-property").patch(toggleSaveProperty);
router.route("/").post(saveProperty);
router.route("/").get(getAllSavedProperties);

export default router;

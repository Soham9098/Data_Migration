import express from "express";
const router = express.Router();
import migrateData from "../controller/migrationController.js";

router.post("/migration", migrateData);

export default router;

import express, { Router } from "express";
import { verifyPatient } from "../middlewares/patient.middlewares";
import { registerPatient, showPatient, updatePatient, deletePatient, patchPatient } from "../controllers/patient.controllers";

const app = express();
export const routes = Router();

routes.get("/patients", showPatient);
routes.post("/patients", verifyPatient, registerPatient);
routes.patch("/patients/:id", patchPatient);
routes.put("/patients/:id", updatePatient);
routes.delete("/patients/:id", deletePatient);

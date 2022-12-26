import express, { Router } from "express";
import { registerPatient, showPatient, updatePatient, deletePatient, patchPatient } from "../controllers/patient.controllers";

const app = express();
export const routes = Router();

routes.get("/patients", showPatient);
routes.post("/patients", registerPatient);
routes.patch("/patients/:id", patchPatient);
routes.put("/patients/:id", updatePatient);
routes.delete("/patients/:id", deletePatient);

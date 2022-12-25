import express, { Router } from "express";
import { registerPatient, showPatient } from "../controllers/patient.controllers";

const app = express();
export const routes = Router();

routes.get("/patients", showPatient);
routes.post("/patients", registerPatient);
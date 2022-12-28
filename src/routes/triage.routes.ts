import express, { Router } from "express";
import { showTriage, createTriage, patchTriage, updateTriage, deleteTriage } from "../controllers/triage.controllers";

const app = express();
export const routeTriage = Router();

routeTriage.get("/triage", showTriage);
routeTriage.post("/triage", createTriage);
routeTriage.patch("/triage/:id", patchTriage);
routeTriage.put("/triage/:id", updateTriage);
routeTriage.delete("/triage/:id", deleteTriage);

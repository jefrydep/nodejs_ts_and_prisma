import express, { Router } from "express";
import { showDiagnostics, createDiagnostics, updateDiagnostics, deleteDiagnostics, patchDiagnostics } from "../controllers/diagnostics.controllers";

const app = express();
export const routeDiagnostics = Router();

routeDiagnostics.get("/diagnostics",showDiagnostics);
routeDiagnostics.post("/diagnostics",createDiagnostics);
routeDiagnostics.patch("/diagnostics/:id",patchDiagnostics);
routeDiagnostics.put("/diagnostics/:id",updateDiagnostics);
routeDiagnostics.delete("/diagnostics/:id",deleteDiagnostics);
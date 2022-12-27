import express, { Router } from "express";
import { login } from "~/controllers/auth.controller";
 
const app = express();
const route = Router();
route.post("/auth", login);

export const authRoutes = route;
import express, { Router } from "express";
import { register, showUser } from "../controllers/user.controllers";
import { authenticate } from "../middlewares/auth.middlewares";

const app = express();
export const route = Router();

route.get("/users",authenticate, showUser);
route.post("/users", register);

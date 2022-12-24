import express, { Router } from "express";
import {
  deleteUser,
  registerUser,
  showUser,
  updateRole,
} from "../controllers/user.controllers";
import { authenticate } from "../middlewares/auth.middlewares";

const app = express();
export const route = Router();

route.get("/users", showUser);
route.post("/users", registerUser);
route.delete("/users/:id", deleteUser);
route.patch("/users/:id", updateRole);

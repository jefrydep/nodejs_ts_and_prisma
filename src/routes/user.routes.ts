import express, { Router } from "express";
import { showUser } from "../controllers/user.controllers";

const app = express();
export const route = Router();

route.get("/users", showUser);

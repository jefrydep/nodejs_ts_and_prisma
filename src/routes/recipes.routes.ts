import express, { Router } from "express";
import { showRecipes, createRecipes, patchRecipes, updateRecipes, deleteRecipes } from "../controllers/recipes.controllers";

const app = express();
export const routeRecipes = Router();

routeRecipes.get("/recipes",showRecipes);
routeRecipes.post("/recipes",createRecipes);
routeRecipes.patch("/recipes/:id",patchRecipes);
routeRecipes.put("/recipes/:id",updateRecipes);
routeRecipes.delete("/recipes/:id",deleteRecipes);
import { Prisma } from "@prisma/client";
import { RecipesServices } from "../services/recipes.services";
import { Request, Response, NextFunction } from "express";

export const showRecipes = async (req: Request, res: Response) => {
    try {
      const result = await RecipesServices.Get();
      res.json(result);  
    } catch (error) {
      res.json({error: "error"})  
    }
};

export const createRecipes = async (req: Request, res: Response) => {
    try {
      const result = await RecipesServices.Create(req.body.recipes);
      res.status(201).json(result);  
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error);       
    }
};

export const patchRecipes = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
        const result = await RecipesServices.Patch(convertId);
        res.status(200).json(result);
      }  
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error);
      res.json({error: "error"});  
    }
};

export const updateRecipes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
        const result = await RecipesServices.Update(data, convertId);
        res.status(200).json(result);
      }  
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error);  
  }
};

export const deleteRecipes = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
        const result = await RecipesServices.Delete(convertId);
        res.status(204).json(result);
      }  
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
        console.log(error);
        next({
            status: 400,
            message: "Error, ingrese un Id válido",
            errorContent: "Error insert a valid Id",
          });  
    }
}
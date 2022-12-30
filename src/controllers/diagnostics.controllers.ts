import { Prisma } from "@prisma/client";
import { DiagnosticsServices } from "../services/diagnostics.services";
import { Request, Response, NextFunction } from "express";

export const showDiagnostics = async (req: Request, res: Response) => {
    try {
      const result = await DiagnosticsServices.Get();
      res.json(result);        
    } catch (error) {
      res.json({error: "error"})  
    }
};

export const createDiagnostics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await DiagnosticsServices.Create(req.body);
      res.status(201).json(result);    
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error)
      if (error.code=="P2014"){res.status(400).json({ error:"duplicate argument in appointmentId" });}
        else if (error.code=="P2025"){res.status(400).json({ error:"insert a valid appointmentId"});} 
        else if(error.code=="P2025")
        next({
            status: 400,
            message: "Error, Falta argumento en los campos",
            errorContent: "missing argument in fields",
        });     
    }   
};

export const patchDiagnostics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0){
      const result = await DiagnosticsServices.Patch(convertId);
      res.status(200).json(result);
    }
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    res.json({error: "error"});
    
  }
};

export const updateDiagnostics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0){
      const result = await DiagnosticsServices.Update(data, convertId);
      res.status(200).json(result);
    }
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log(error);
    
  }
}

export const deleteDiagnostics = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      console.log(id);
      if (typeof convertId === "number" && convertId >= 0) {
        const result = await DiagnosticsServices.Delete(convertId);
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
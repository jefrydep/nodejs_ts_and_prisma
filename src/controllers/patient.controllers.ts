import { Prisma } from "@prisma/client";
import { PatientServices } from "../services/patient.services";
import { Request, Response, NextFunction } from "express";

export const showPatient = async (req: Request, res: Response) => {
    try {
      const result = await PatientServices.getPatient();
      res.json(result);
    } catch (error) {
      console.log(error)
      res.json({ error: "error" });
    }
  };

export const patchPatient = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
      const result = await PatientServices.listPatient(convertId);
      res.json(result);
      };
    } catch (error) {
      res.json({error: "error"});      
    }
  };

export const registerPatient = async (req: Request, res: Response) => {
    try {
      const result = await PatientServices.createPatient(req.body);
      console.log(req.body);
      res.status(201).json(result);
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error)
      if (error.code=="P2002"){res.status(400).json({ error:"patient exist" });}
      if (error.code=="P2025"){res.status(400).json({ error:"not corporation" });}
      if (error.code=="P2013"){res.status(400).json({ error:"required argument" });}
      else{
        res.status(400).json({error})
      }
    }
  };

export const updatePatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0){
    const result = await PatientServices.updatePatient(data, convertId);
    res.status(200).json(result);
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }    
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
       console.log(error)
       next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
  }
}

export const deletePatient = async(req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await PatientServices.deletePatient(convertId);
      res.status(204).json(result);
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    console.log(error);
    //if (error.code == "P2025")
        next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });  
  }
};

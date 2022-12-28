import { Prisma } from "@prisma/client";
import { TriageServices } from "../services/triage.services";
import { Request, Response, NextFunction } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const showTriage = async (req: Request, res: Response) => {
    try {
      const result = await TriageServices.Get();
      res.json(result);
    } catch (error) {
      console.log(error)
      res.json({ error: "error" });
    }
  };

export const createTriage = async (req: Request, res: Response) => {
    try {
      const result = await TriageServices.Create(req.body);
      res.status(201).json(result);
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      console.log(error);
      if (error.code=="P2014"){res.status(400).json({ error:"relationship violation" });}
      if (error.code=="P2025"){res.status(400).json({ error:"not appointment" });}
      else{
        res.status(400).json({error})
      }
    }
  };

export const patchTriage = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
        const result = await TriageServices.Patch(convertId);
        res.json(result);
      }
    } catch (error) {
      res.json({error: "error"});
    }
  };

export const updateTriage = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const convertId = parseInt(id);
      if (typeof convertId === "number" && convertId >= 0){
        const result = await TriageServices.Update(data, convertId);
        res.status(200).json(result);
      } else {
        next({
          status: 400,
          message: "Error, ingrese un Id válido",
          errorContent: "Error insert a valid Id",
        });
      }
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
  };

export const deleteTriage = async(req: Request, res: Response, next:NextFunction) => {
    try {
      const { id } = req.params;
      const convertId = parseInt(id);
      if(typeof convertId === "number" && convertId >= 0) {
        const result = await TriageServices.Delete(convertId);
        res.status(204).json(result);
      } else {
        next({
          status: 400,
          message: "Error, ingrese un Id válido",
          errorContent: "Error insert a valid Id",
        });
      }
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
}
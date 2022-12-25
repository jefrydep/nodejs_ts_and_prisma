import { Prisma } from "@prisma/client";
import { getPatient, createPatient } from "../services/patient.services";
import { Request, Response, NextFunction } from "express";

export const showPatient = async (req: Request, res: Response) => {
    try {
      const result = await getPatient();
      res.json(result);
    } catch (error) {
      res.json({ error: "error" });
    }
  };

export const registerPatient = async (req: Request, res: Response) => {
    try {
      const result = await createPatient(req.body);
      console.log(req.body);
      res.status(201).json(result);
    } catch (error: Prisma.PrismaClientKnownRequestError | any) {
      if (error.code=="P2002"){ res.status(400).json({ error:"patient exist" });}
      if (error.code=="P2025"){res.status(400).json({ error:"not corporation" });}
      else{
        res.status(400).json({error})
      }
    }
  };
import { Prisma } from "@prisma/client";
import { TriageServices } from "../services/triage.services";
import { Request, Response, NextFunction } from "express";

export const showTriage= async (req: Request, res: Response) => {
    try {
      const result = await TriageServices.getTriage();
      res.json(result);
    } catch (error) {
      console.log(error)
      res.json({ error: "error" });
    }
  };
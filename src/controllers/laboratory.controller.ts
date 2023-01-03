import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import { laboratoryServices } from "../services/laboratory.service";
import { request } from "http";
import { Prisma, prisma } from "@prisma/client";

export const showLaboratories = async (req: Request, res: Response) => {
  try {
    const result = await laboratoryServices.getAllLaboratories();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};

export const createLaboratory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await laboratoryServices.createLaboratories(req.body);
    res.status(201).json(result);
  } catch (error:Prisma.PrismaClientKnownRequestError |any) {
    res.status(400).json(error);
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {};

export const updateDoctor = async (req: Request, res: Response) => {};

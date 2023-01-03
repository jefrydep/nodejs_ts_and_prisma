import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { doctorServices } from "../services";

export const showAllDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};
export const showDoctorBy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await doctorServices.get(convertId);
      res.status(200).json(result);
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
  } catch (error) {
    res.json({ error: "error" });
  }
};

export const createDoctor = async (
  {body}: Request,
  res: Response,
  next: NextFunction
) => {
  
  try {
    const result = await doctorServices.create(body);
    res.status(201).json(result);
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code === "P2014") {
      next({
        status: 400,
        message: "el usuario ya existe",
        errorContent: "error, user already exit",
      });
    } else if (error.code === "P2025") {
      next({
        status: 400,
        message: "Usuario no encontrado ",
        errorContent: "User not found",
      });
    } else {
      console.log("error");
    }
    res.status(400).json(error);
  }
};

export const removeDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await doctorServices.delete(convertId);
      res.status(204).json(result);
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code == "P2025") {
      next({
        status: 400,
        message: "Error al eliminar a un usuario inexistente!",
        errorContent: error.meta.cause,
      });
    } else if (error.code == "P2003") {
      next({
        status: 400,
        message: "error :no puedes eliminar ",
        errorContent: error.meta.cause,
      });
    }
  }
};

export const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    const { cieCod, medicalRelation } = req.body;
    if (typeof convertId === "number" && convertId >= 0) {
      if (cieCod && medicalRelation) {
        const result = await doctorServices.update(
          convertId,
          cieCod,
          medicalRelation
        );
        res.status(200).json(result);
      } else {
        next({
          status: 400,
          message: "you shoud update 'cieCod' and 'medicalRelation'",
          errorContent: "it's needs values",
        });
      }
    } else {
      next({
        status: 400,
        message: "Error, ingrese un Id válido",
        errorContent: "Error insert a valid Id",
      });
    }
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code == "P2025") {
      next({
        status: 400,
        message: "Error, usuario no encontrado para actualizar!",
        errorContent: error.meta.cause,
      });
    }
  }
};

import { NextFunction, Request, Response } from "express";
import { doctorServices } from "../services/doctor.service";
import { Prisma } from "@prisma/client";

export const showDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const result = await doctorServices.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const deleteDoctor = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params
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
  } catch (error: Prisma.PrismaClientKnownRequestError |any) {
    if (error.code == "P2025") {
      next({
        status: 400,
        message: "Error al eliminar a un usuario inexistente!",
        errorContent: error.meta.cause,
      });
    }
  }
};

export const updateDoctor = async (req: Request, res: Response,next:NextFunction) => {


try {
  const {id}=req.params;
  const convertId  = parseInt(id);
  const {cieCod,medicalRelation}= req.body;
  if (typeof convertId === "number" && convertId >= 0) {
     
    if (cieCod & medicalRelation) {
      const result = await doctorServices.update(convertId,cieCod,medicalRelation);
      res.status(200).json(result);
    } else {
      next({
        status:400,
        message:"user exitente",
        errorContent:"user not found",
      })
    }
  } else {
    next({
      status: 400,
      message: "Error, ingrese un Id válido",
      errorContent: "Error insert a valid Id",
    });
  }
} catch (error:Prisma.PrismaClientKnownRequestError | any) {
  if(error.code=="P2025"){
    next({
      status:400,
      message:"Error, usuario no encontrado para actualizar!",
      errorContent:error.meta.cause,
    })
  }


}



};

// export const showDoctor = async (req: Request, res: Response) => {};

// export const createDoctor = async (req: Request, res: Response) => {};

// export const deleteDoctor = async (req: Request, res: Response) => {};

// export const updateDoctor = async (req: Request, res: Response) => {};
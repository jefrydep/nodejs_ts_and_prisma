import { Prisma, Role, prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { userServices } from "../services/user.service";

export const showUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.create(req.body);
    res.status(201).json(result);
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code == "P2002") {
      res.status(400).json({ error: "user exist" });
    }
    if (error.code == "P2025") {
      res.status(400).json({ error: "not corporation" });
    } else {
      res.status(400).json({ error });
    }
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await userServices.delete(convertId);
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
    }
  }
};

export const updateRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    const { role } = req.body;
    if (typeof convertId === "number" && convertId >= 0) {
      const keys = Object.keys(Role);
      if (keys.includes(role)) {
        const result = await userServices.updateRole(convertId, role);
        res.status(200).json(result);
      } else {
        next({
          status:400,
          message:"Rol inexistente!",
          errorContent:"Role not found",
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
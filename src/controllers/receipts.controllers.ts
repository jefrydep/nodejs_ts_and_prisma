import { Response, Request, NextFunction } from "express";
import {  receiptsServices } from "../services";

export const showReceipts = async (req: Request, res: Response) => {
  try {
    const result = await receiptsServices.getAllReceipts();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};
export const showReceiptsBy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const convertId = parseInt(id);
    if (typeof convertId === "number" && convertId >= 0) {
      const result = await receiptsServices.get(convertId);
      res.status(200).json(result);
    }else{
        next({
            status:400,
            message:"error ingrese un Id valido",
            errorContent:"error inset a valid Id"
        });
    }
  } catch (error) {
    console.log(error)
    res.json({error:'error'})
  }
};
export const createReceipts = async (req: Request, res: Response) => {
  try {
    const result = await receiptsServices.createReceipts();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

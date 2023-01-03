import { Response, Request } from "express";
import { receiptsServices } from "~/services/receipts.services";

export const showReceipts = async (req: Request, res: Response) => {
  try {
    const result = await receiptsServices.getAllReceipts();
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: "error" });
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

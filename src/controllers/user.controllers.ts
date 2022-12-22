import { getUser } from "../services/user.services";
import { Request, Response, NextFunction } from "express";

export const showUser = async (req: Request, res: Response) => {
  try {
    const result = await getUser();
    res.json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};

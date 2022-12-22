import { Prisma } from "@prisma/client";
import { getUser, createUser } from "../services/user.services";
import { Request, Response, NextFunction } from "express";

export const showUser = async (req: Request, res: Response) => {
  try {
    const result = await getUser();
    res.json(result);
  } catch (error) {
    res.json({ error: "error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const result = await createUser(req.body);
    console.log(req.body);
    res.json(result);
  } catch (error: Prisma.PrismaClientKnownRequestError | any) {
    if (error.code=="P2002"){ res.status(400).json({ error:"user exist" });}
    if (error.code=="P2025"){res.status(400).json({ error:"not corporation" });}
    else{
      res.status(400).json({error})
    }
    
  }
};

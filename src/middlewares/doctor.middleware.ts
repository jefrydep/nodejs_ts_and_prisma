import { NextFunction, Request, Response } from "express";

export const validateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, medicalRelation, cieCod } = req.body;

  if (!userId) {
    res.status(400).json({ error: `Value ' ${userId} 'not exit` });
  } else if (typeof userId !== "number") {
    res.status(400).json({ error: `the value UserId shoud be a number` });
  } else if (typeof medicalRelation !== "string") {
    res
      .status(400)
      .json({ error: `the value medicalRelation shoud be a string` });
  } else if (typeof cieCod !== "number") {
    res.status(400).json({ error: `the value cieCod shoud be a number` });
  } else {
    next();
  }
};

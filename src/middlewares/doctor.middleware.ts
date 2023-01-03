import { NextFunction, Request, Response } from "express";

export const validateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, medicalRelation, cieCod } = req.body;

  if (!userId) {
    res.status(400).json({ error: `"userId" value not exit` });
  } else if (typeof userId !== "number") {
    res.status(400).json({ error: ` "userId" value shoud be a number` });
  } else if (
    typeof medicalRelation !== "string" ||
    medicalRelation.length !== 8
  ) {
    res
      .status(400)
      .json({ error: ` "medicalRelation" value shoud be a string` });
  } else if (typeof cieCod !== "number") {
    res.status(400).json({ error: ` "cieCod" value shoud be a number` });
  } else {
    next();
  }
};

export const validateUpdateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cieCod, medicalRelation } = req.body;
  if (typeof cieCod !== "number") {
    res.status(400).json({ error: ` "cieCod" value shoud be a number` });
  } else if (typeof medicalRelation !== "string") {
    res
      .status(400)
      .json({ error: ` "medicalRelation" value shoud be a string` });
  }else{
    next();
  }
};

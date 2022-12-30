import { Request, Response, NextFunction } from "express";

export const verifyPatient = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, documentNumber, dateBirth, gender, bloodType, physicalHistory, corporationId } = req.body;
    if (typeof firstName !== "string" || firstName.length <= 0) {
        res.status(400).json({ error: `Value ' ${firstName} ' is not set in firstName` })
    }
    else if (typeof lastName !== "string" || lastName.length <= 0) {
        res.status(400).json({ error: `Value ' ${lastName} ' is not set in lastName` })
    }
    else if (typeof documentNumber !== "string" || documentNumber.length !== 8) {
        res.status(400).json({ error: `Value ' ${documentNumber} ' is not set in documentNumber` })
    }
    else if (typeof dateBirth !== "string" || dateBirth.length <= 0) {
        res.status(400).json({ error: `Value ' ${dateBirth} ' is not set in dateBirth` })
    }
    else if (typeof gender !== "string" || gender.length <= 0) {
        res.status(400).json({ error: `Value ' ${gender} ' is not set in gender` })
    }
    else if (typeof bloodType !== "string" || bloodType.length <= 0) {
        res.status(400).json({ error: `Value ' ${bloodType} ' is not set in bloodType` })
    }
    else if (typeof physicalHistory !== "string" || physicalHistory.length <= 0) {
        res.status(400).json({ error: `Value ' ${physicalHistory} ' is not set in physicalHistory` })
    }
    else if (typeof corporationId !== "number") {
        res.status(400).json({ error: `Value ' ${corporationId} ' is not set in corporationId` })
    }
    else {
        next();
    }
}
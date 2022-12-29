
import { Response } from "express";

export const badRequest = (res: Response, status: number, data: { [key: string]: any }) => {
    return res.status(status).json(data);
}
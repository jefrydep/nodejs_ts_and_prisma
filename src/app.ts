import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { prisma } from "./utils/prisma.server";
import { handleError } from "./middlewares/error.middleware";
import { docRoute, labRoute } from "./routes";
export const app = express();
require("dotenv").config();


const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use('/api',docRoute)
app.use('/api',labRoute)


app.use(handleError)
app.get("/", (req: Request, res: Response) => {
  prisma;
  res.status(200).json({ message: "ok" });
});

export default app;